"""Build the case-study index pages: /case-studies/ and /ar/case-studies/.

Google reported /case-studies/ as "Not found (404)" (Search Console, 2026-11-09): the 17 case pages
existed but nothing answered at the folder address. These two pages list every case page, in the same
look as the case pages themselves (style, header, footer copied from the first case page).
Rerun after adding or renaming a case page:  python3 tools/build_case_index.py
"""
import html, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "public"
SITE = "https://www.dot-cc.com"

TEXT = {
    "en": {"dir": "ltr", "base": "case-studies", "title": "Client results, one question per page | dot. tech studio, Saudi Arabia",
           "desc": "Seventeen real dot. tech studio engagements in Saudi Arabia, each answering one question with the measured result. Client names withheld.",
           "h1": "Client results, one question per page",
           "lead": "Seventeen real dot. tech studio engagements. Each page answers one question with the measured result. Client names are withheld.",
           "crumb": "client results", "other": "العربية", "industry": "Industry",
           "faq": [("What results does dot. tech studio deliver?", "Measured before and after numbers from real engagements in Saudi insurance, payments, manufacturing and healthcare: faster quotes and reports, money found in reconciliations, and regulator deadlines met. Each page above answers one question with one result."),
                   ("Why are the client names hidden?", "The work is for regulated companies, so names stay private. The numbers, the industry and what was done are real."),
                   ("How does working with dot. tech studio start?", "With a paid diagnosis month that reads your systems, data and workflow and ends in a written 90-day plan, or with the 4-hour AI enablement session for one person.")]},
    "ar": {"dir": "rtl", "base": "ar/case-studies", "title": "نتائج العملاء، سؤال واحد في كل صفحة | dot. tech studio، السعودية",
           "desc": "سبعة عشر مشروعًا حقيقيًا من dot. tech studio في السعودية، كل صفحة تجيب عن سؤال واحد بالنتيجة المقاسة. أسماء العملاء محجوبة.",
           "h1": "نتائج العملاء، سؤال واحد في كل صفحة",
           "lead": "سبعة عشر مشروعًا حقيقيًا من dot. tech studio. كل صفحة تجيب عن سؤال واحد بالنتيجة المقاسة. أسماء العملاء محجوبة.",
           "crumb": "نتائج العملاء", "other": "English", "industry": "القطاع",
           "faq": [("ما النتائج التي يحققها dot. tech studio؟", "أرقام مقاسة قبل وبعد من مشاريع حقيقية في التأمين والمدفوعات والتصنيع والصحة في السعودية: عروض أسعار وتقارير أسرع، وأموال مستردة في المطابقات، ومواعيد تنظيمية تم الوفاء بها."),
                   ("لماذا أسماء العملاء محجوبة؟", "العمل لشركات خاضعة للتنظيم، لذلك تبقى الأسماء خاصة. الأرقام والقطاع وما تم إنجازه حقيقية."),
                   ("كيف يبدأ العمل مع dot. tech studio؟", "بشهر تشخيص مدفوع يقرأ أنظمتك وبياناتك وسير العمل وينتهي بخطة مكتوبة لتسعين يومًا.")]},
}


def grab(pattern, s):
    m = re.search(pattern, s, re.S)
    return m.group(1).strip() if m else ""


def cases(lang):
    folder = ROOT / TEXT[lang]["base"]
    out = []
    for page in sorted(folder.glob("*/index.html")):
        s = page.read_text()
        out.append({
            "slug": page.parent.name,
            "q": grab(r"<h1>(.*?)</h1>", s),
            "answer": html.unescape(grab(r'<meta name="description" content="(.*?)"', s)).split(". A real")[0].split(". مشروع")[0],
            "kicker": grab(r'<p class="kicker">(.*?)</p>', s),
        })
    return out


def build(lang):
    t = TEXT[lang]
    sample = (ROOT / TEXT[lang]["base"]).glob("*/index.html").__next__().read_text()
    style = grab(r"(<style>.*?</style>)", sample)
    foot = grab(r'(<div class="foot">.*?</div>)\s*</div>', sample)
    url = f"{SITE}/{t['base']}/"
    en_url, ar_url = f"{SITE}/case-studies/", f"{SITE}/ar/case-studies/"
    other = ar_url if lang == "en" else en_url
    items = "\n".join(
        f'<li><a href="{SITE}/{t["base"]}/{c["slug"]}/">{c["q"]}</a><br><span class="kicker">{c["kicker"]}</span> {html.escape(c["answer"])}</li>'
        for c in cases(lang))
    import json as _j
    faq_ld = _j.dumps({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in t["faq"]]}, ensure_ascii=False)
    faq_html = "\n".join(f"<h3>{q}</h3>\n<p>{a}</p>" for q, a in t["faq"])
    page = f"""<!doctype html>
<html lang="{lang}" dir="{t['dir']}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t['title']}</title>
<meta name="description" content="{t['desc']}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow">
<link rel="alternate" hreflang="en" href="{en_url}">
<link rel="alternate" hreflang="ar" href="{ar_url}">
<link rel="alternate" hreflang="x-default" href="{en_url}">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5KTNW8VJXT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){{dataLayer.push(arguments);}}
  gtag('js', new Date());
  gtag('config', 'G-5KTNW8VJXT');
</script>
<meta property="og:type" content="website">
<meta property="og:site_name" content="dot.">
<meta property="og:title" content="{t['title']}">
<meta property="og:description" content="{t['desc']}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}/og/tech-studio.png">
<link rel="icon" href="{SITE}/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="{SITE}/apple-touch-icon.png">
<script type="application/ld+json">{faq_ld}</script>
<script type="application/ld+json">{{"@context": "https://schema.org", "@type": "CollectionPage", "name": "{t['h1']}", "url": "{url}", "inLanguage": "{lang}", "isPartOf": {{"@type": "WebSite", "name": "dot.", "url": "{SITE}"}}}}</script>
{style}
<style>.cases{{list-style:none;padding:0}}.cases li{{margin:0 0 18px;padding-bottom:16px;border-bottom:1px solid var(--line)}}.cases a{{font-weight:700;font-size:17px}}.cases .kicker{{display:inline;margin:0}}</style>
</head>
<body>
<div class="wrap">
<header class="top">
<a class="brand" href="{SITE}/">dot<b>.</b></a>
<nav class="crumbs"><a href="{SITE}/">dot.</a> / {t['crumb']} · <a href="{other}">{t['other']}</a></nav>
</header>
<main>
<h1>{t['h1']}</h1>
<p class="lead">{t['lead']}</p>
<ul class="cases">
{items}
</ul>
<h2>{'Questions' if lang == 'en' else 'أسئلة'}</h2>
{faq_html}
<a class="cta" href="{SITE}/tech-studio-results/">{'All results on one page' if lang == 'en' else 'كل النتائج في صفحة واحدة'} &rarr;</a>
</main>
{foot}
</div>
</body>
</html>
"""
    (ROOT / t["base"] / "index.html").write_text(page)
    print(ROOT / t["base"] / "index.html", len(cases(lang)), "cases")


if __name__ == "__main__":
    build("en")
    build("ar")
