"""Add a 15-minute call path and a WhatsApp button to the creative studio site bundle (public/sites/studio.json).
Run from the dot-cc repo root. Idempotent: does nothing if the marker is already present."""
import json, sys

P = "public/sites/studio.json"
WA = sys.argv[1] if len(sys.argv) > 1 else ""   # digits only, country code first, e.g. 9665XXXXXXXX; empty = no WhatsApp button

raw = open(P).read()
s = json.loads(raw)

def enc(x):
    return json.dumps(x).replace('<', '\\u003c').replace('>', '\\u003e').replace('&', '\\u0026')

assert enc(s) == raw, "bundle encoding changed; stop"
if "/* lead-paths:start */" in s:
    print("already patched"); sys.exit(0)

def once(old, new):
    global s
    assert s.count(old) == 1, ("not unique", old[:60], s.count(old))
    s = s.replace(old, new)

# 1. CSS
css = """
/* lead-paths:start */
.hero-ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px;position:relative;z-index:3;pointer-events:auto}
.hero-ctas a{font-family:'AG Heavy',sans-serif;font-size:1rem;border-radius:999px;padding:14px 26px;text-decoration:none;transition:transform .15s}
.hero-ctas a:hover{transform:translateY(-2px)}
.hero-ctas .go{background:var(--ink);color:var(--outlaw)}
.hero-ctas .call{background:var(--paper);color:var(--ink);border:2px solid var(--ink)}
.wa-btn{position:fixed;left:18px;bottom:18px;z-index:60;display:flex;align-items:center;gap:8px;background:#25D366;color:#0B1F12;
  font-family:'AG Heavy',sans-serif;font-size:.95rem;text-decoration:none;border-radius:999px;padding:12px 18px;box-shadow:0 6px 20px rgba(0,0,0,.18)}
.wa-btn svg{width:20px;height:20px;flex:none}
.wa-btn:hover{transform:translateY(-2px)}
@media (max-width:520px){.wa-btn span{display:none}.wa-btn{padding:13px}.hero-ctas{gap:8px;margin-top:18px}.hero-ctas a{font-size:.85rem;padding:11px 16px}.hero-hint{display:none}}
.trusted{background:var(--ink);color:var(--paper);padding:22px 0;position:relative;z-index:2}
.trusted p{margin:0;font-size:clamp(.85rem,1.6vw,1.05rem);line-height:1.7}
.trusted b{font-family:'AG Heavy',sans-serif;color:var(--outlaw);font-weight:400;margin-right:10px}
.trusted span{white-space:nowrap}
.offer-box{margin-top:30px;background:var(--paper);border:2px solid var(--ink);border-radius:18px;padding:20px 22px;max-width:30rem}
.offer-box h3{font-family:'AG Heavy',sans-serif;font-size:1.25rem;margin:0 0 6px}
.offer-box p{margin:0 0 14px}
.offer-box a{display:inline-block;font-family:'AG Heavy',sans-serif;background:var(--ink);color:var(--outlaw);text-decoration:none;border-radius:999px;padding:12px 22px}
/* lead-paths:end */
"""
once(".send{font-family:'AG Heavy'", css + ".send{font-family:'AG Heavy'")

# 2. Hero buttons, under the intro paragraph
once("""for companies that want to be remembered, not just seen.</p>
    </div>""",
     """for companies that want to be remembered, not just seen.</p>
      <div class="hero-ctas"><a class="go" href="#contact">Start a brief</a><a class="call" href="#contact" data-call>Book a 15-minute call</a></div>
    </div>""")

# 3. A call option in the form
once("""<label class="opt"><input type="checkbox" name="need" value="Brand identity"><span>Brand identity</span></label>""",
     """<label class="opt"><input type="checkbox" name="need" value="A 15-minute call"><span>A 15-minute call</span></label>
          <label class="opt"><input type="checkbox" name="need" value="Brand identity"><span>Brand identity</span></label>""")

# 3b. A free brand check: the entry offer, as a form option and a box beside the form
once("""<label class="opt"><input type="checkbox" name="need" value="A 15-minute call"><span>A 15-minute call</span></label>""",
     """<label class="opt"><input type="checkbox" name="need" value="A 15-minute call"><span>A 15-minute call</span></label>
          <label class="opt"><input type="checkbox" name="need" value="Free brand check"><span>Free brand check</span></label>""")
once("""<a class="direct" href="mailto:info@dot-cs.com">info@dot-cs.com</a>
    </div>""",
     """<a class="direct" href="mailto:info@dot-cs.com">info@dot-cs.com</a>
      <div class="offer-box"><h3>Not ready for a brief?</h3><p>Get a free brand check. Send us your logo and a few of your posts, and we reply with three fixes you can use straight away.</p><a href="#briefForm" data-check>Get my free brand check</a></div>
    </div>""")

# 3c. Trusted-by strip between the hero and the manifesto (names already shown in the case files)
once("""</section>

<section class="manifesto" aria-label="What we believe">""",
     """</section>

<section class="trusted" aria-label="Trusted by"><div class="wrap"><p><b>Trusted by</b> <span>Syrian Airlines</span> · <span>General Entertainment Authority (Path@)</span> · <span>Ishraqat Festival</span> · <span>Al Saif Brands</span> · <span>Al Dahayan</span> · <span>Monarque</span> · <span>Silver in Sky</span></p></div></section>

<section class="manifesto" aria-label="What we believe">""")

# 4. WhatsApp button (only when a number is given) and the call-button behaviour
wa_html = ""
if WA:
    msg = "Hi dot. creative studio, I would like to talk about my brand."
    import urllib.parse
    wa_html = ('<a class="wa-btn" href="https://wa.me/%s?text=%s" target="_blank" rel="noopener" aria-label="Chat with dot. on WhatsApp">'
               '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2'
               'a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1'
               'a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8'
               ' 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>'
               '<span>Chat on WhatsApp</span></a>\n') % (WA, urllib.parse.quote(msg))
js = """<script>/* lead-paths */(function(){document.querySelectorAll('[data-call]').forEach(function(a){a.addEventListener('click',function(){
var c=document.querySelector('input[name="need"][value="A 15-minute call"]');if(c)c.checked=true;});});
document.querySelectorAll('[data-check]').forEach(function(a){a.addEventListener('click',function(){
var c=document.querySelector('input[name="need"][value="Free brand check"]');if(c)c.checked=true;
var m=document.querySelector('#briefForm textarea');if(m&&!m.value)m.value='Free brand check, please. Our brand: ';});});
document.querySelectorAll('.wa-btn').forEach(function(a){a.addEventListener('click',function(){try{parent.postMessage({dot:'whatsapp',site:'creative-studio'},'*')}catch(e){}});});})();</script>
"""
once("</body>\n</html>", wa_html + js + "</body>\n</html>")

open(P, "w").write(enc(s))
print("patched", "with WhatsApp" if WA else "without WhatsApp (no number given)")
