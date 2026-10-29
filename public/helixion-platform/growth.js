/* Brand DNA and Marketing.
   The tree: the founders' Miro board (Marketing branch, 29 services) plus four additions for Saudi reality and the
   ATL / BTL / TTL split: WhatsApp and SMS, Mass media, Activations and events, Saudi seasons. 33 services, 6 verbs.
   Every label is "English|Arabic". line: ATL mass media, BTL direct and targeted, TTL both, '' = foundation work. */
(function () {
const MK = [
 { id: 'plan', n: 'Plan|التخطيط', s: 'Know your market and pick where you win|افهم سوقك واختر أين تتفوّق', svc: [
  { id: 'research', n: 'Market research|أبحاث السوق', d: 'Learn who buys, who competes and how big the chance is.|اعرف من يشتري ومن ينافس وما حجم الفرصة.', line: '',
    a: ['Customer research|أبحاث العملاء', 'Competitor analysis|تحليل المنافسين', 'Market sizing (TAM, SAM, SOM)|تقدير حجم السوق', 'Trend analysis|تحليل الاتجاهات', 'Surveys and interviews|الاستبيانات والمقابلات'] },
  { id: 'segmentation', n: 'Segmentation|تقسيم السوق', d: 'Split the market into groups you can actually talk to.|قسّم السوق إلى شرائح تستطيع مخاطبتها فعلاً.', line: '',
    a: ['Demographic|ديموغرافي', 'Geographic|جغرافي', 'Lifestyle and values|نمط الحياة والقيم', 'Behaviour|سلوكي'] },
  { id: 'targeting', n: 'Targeting|الاستهداف', d: 'Choose the customers worth winning first.|اختر العملاء الأجدر بالبدء بهم.', line: '',
    a: ['Ideal customer profile|ملف العميل المثالي', 'Buyer personas|شخصيات المشترين', 'Account-based marketing|التسويق القائم على الحسابات', 'Niche targeting|استهداف الشرائح المتخصصة'] },
  { id: 'positioning', n: 'Positioning|التموضع', d: 'Say clearly why you, and not the others.|قل بوضوح لماذا أنت وليس غيرك.', line: '',
    a: ['Value proposition|عرض القيمة', 'Brand positioning|تموضع العلامة', 'Messaging framework|إطار الرسائل', 'Competitive differentiation|التميّز عن المنافسين'] },
  { id: 'seasons', n: 'Saudi seasons|المواسم السعودية', d: 'Plan the year around the moments people shop.|خطّط سنتك حول المواسم التي يتسوّق فيها الناس.', line: 'TTL', add: true,
    a: ['Ramadan|رمضان', 'Eid al-Fitr|عيد الفطر', 'Eid al-Adha|عيد الأضحى', 'Founding Day, 22 February|يوم التأسيس، 22 فبراير', 'National Day, 23 September|اليوم الوطني، 23 سبتمبر', 'White Friday|الجمعة البيضاء', 'Back to school|العودة إلى المدارس'] },
 ] },
 { id: 'brand', n: 'Brand|العلامة', s: 'Who you are, how you look, how people see you|من أنت، وكيف تبدو، وكيف يراك الناس', svc: [
  { id: 'brand-strategy', n: 'Brand strategy|استراتيجية العلامة', d: 'Purpose, mission, values and personality.|الغاية والرسالة والقيم والشخصية.', line: '', dna: true,
    a: ['Purpose|الغاية', 'Mission|الرسالة', 'Values|القيم', 'Personality|الشخصية'] },
  { id: 'brand-identity', n: 'Brand identity|هوية العلامة', d: 'Everything people see, hear and feel from you.|كل ما يراه الناس ويسمعونه ويشعرون به منك.', line: '', dna: true,
    a: ['Logo|الشعار', 'Fonts|الخطوط', 'Colours|الألوان', 'Patterns|الأنماط', 'Tone of voice|نبرة الصوت', 'Sonic identity|الهوية الصوتية', 'Scent|الهوية العطرية', 'Interior style|الطابع الداخلي', 'Moodboard|لوحة الإلهام', 'Photography style|أسلوب التصوير', 'Videography style|أسلوب الفيديو', 'Print files and die cuts|ملفات الطباعة والقوالب', 'Presentation template|قالب العروض', 'Brand guidelines|دليل الهوية'] },
  { id: 'awareness', n: 'Brand awareness|الوعي بالعلامة', d: 'Get your name known and remembered.|اجعل اسمك معروفاً ولا يُنسى.', line: 'TTL',
    a: ['Public relations|العلاقات العامة', 'Sponsorships|الرعايات', 'Partnerships|الشراكات', 'Events|الفعاليات', 'Media coverage|التغطية الإعلامية'] },
  { id: 'reputation', n: 'Brand reputation|سمعة العلامة', d: 'Know what people say about you, and answer well.|اعرف ما يقوله الناس عنك وأحسن الرد.', line: 'TTL',
    a: ['Reviews|التقييمات', 'Press relations|العلاقات الصحفية', 'Crisis management|إدارة الأزمات', 'Social listening|الرصد الاجتماعي'] },
 ] },
 { id: 'launch', n: 'Launch|الإطلاق', s: 'Bring products to market and help sales close|اطرح منتجاتك وادعم فريق المبيعات', svc: [
  { id: 'product-positioning', n: 'Product positioning|تموضع المنتج', d: 'Turn features into reasons to buy.|حوّل المزايا إلى أسباب للشراء.', line: '',
    a: ['Feature messaging|رسائل المزايا', 'Benefit framing|صياغة الفوائد', 'Competitive comparison|المقارنة مع المنافسين'] },
  { id: 'gtm', n: 'Go to market|دخول السوق', d: 'Launch a product with a plan, not a hope.|أطلق منتجك بخطة لا بأمنية.', line: 'TTL',
    a: ['Product launch|إطلاق المنتج', 'Launch campaigns|حملات الإطلاق', 'Beta programmes|برامج التجربة', 'Market rollout|التوسع في السوق'] },
  { id: 'sales', n: 'Sales enablement|تمكين المبيعات', d: 'Give your sales team what wins deals.|زوّد فريق المبيعات بما يكسب الصفقات.', line: 'BTL',
    a: ['Pitch decks|العروض التقديمية', 'Sales scripts|نصوص البيع', 'Battlecards|بطاقات المنافسة', 'Case studies|دراسات الحالة'] },
  { id: 'pricing', n: 'Pricing and packaging|التسعير والباقات', d: 'Price it right, bundle it well.|سعّر بذكاء ورتّب باقاتك جيداً.', line: '',
    a: ['Pricing models|نماذج التسعير', 'Bundles|الباقات المجمّعة', 'Promotions|العروض الترويجية', 'Discount strategy|استراتيجية الخصومات'] },
 ] },
 { id: 'reach', n: 'Reach|الانتشار', s: 'Get in front of the right people, on every channel|صِل إلى الجمهور المناسب عبر كل قناة', svc: [
  { id: 'messaging', n: 'WhatsApp and SMS|واتساب والرسائل النصية', d: 'The channel Saudi customers open first. Checked against the account before every send.|القناة التي يفتحها عملاؤك أولاً، مع فحص الحساب قبل كل إرسال.', line: 'BTL', live: true, add: true, dna: true,
    a: ['Broadcast campaigns|الحملات الجماعية', 'Order and delivery updates|تحديثات الطلب والتوصيل', 'Click-to-WhatsApp ads|إعلانات النقر إلى واتساب', 'Consent and opt-out|الموافقة وإلغاء الاشتراك'] },
  { id: 'social', n: 'Social media|وسائل التواصل', d: 'Post, reply and advertise where your customers scroll.|انشر وتفاعل وأعلن حيث يتصفّح عملاؤك.', line: 'TTL', dna: true,
    a: ['Content posting|نشر المحتوى', 'Community engagement|التفاعل مع المجتمع', 'Trend participation|المشاركة في الترندات', 'Snapchat ads|إعلانات سناب شات', 'TikTok ads|إعلانات تيك توك', 'Meta ads|إعلانات ميتا', 'X ads|إعلانات إكس', 'LinkedIn ads|إعلانات لينكدإن'] },
  { id: 'search', n: 'Search|محركات البحث', d: 'Be found the moment someone looks for you.|كن أول ما يظهر لحظة البحث عنك.', line: 'TTL',
    a: ['Keyword research|بحث الكلمات المفتاحية', 'On-page SEO|تحسين الصفحات', 'Technical SEO|تحسين تقني للموقع', 'Link building|بناء الروابط', 'Google Ads|إعلانات جوجل', 'YouTube ads|إعلانات يوتيوب', 'Shopping ads|إعلانات التسوّق', 'Bing Ads|إعلانات بينج'] },
  { id: 'content', n: 'Content|المحتوى', d: 'Useful content that earns attention.|محتوى مفيد يستحق الانتباه.', line: 'TTL', dna: true,
    a: ['Blog articles|مقالات المدونة', 'Video|الفيديو', 'Podcasts|البودكاست', 'E-books|الكتب الإلكترونية', 'Guides|الأدلة', 'White papers|الأوراق البيضاء'] },
  { id: 'email', n: 'Email|البريد الإلكتروني', d: 'Newsletters and flows that people actually open.|نشرات وتدفقات يفتحها الناس فعلاً.', line: 'BTL', dna: true,
    a: ['Newsletters|النشرات البريدية', 'Lead nurturing|رعاية العملاء المحتملين', 'Promotional campaigns|الحملات الترويجية', 'Automation flows|التدفقات الآلية'] },
  { id: 'influencers', n: 'Influencers|المؤثرون', d: 'Work with creators your customers already trust.|تعاون مع صنّاع محتوى يثق بهم عملاؤك.', line: 'TTL', mawthooq: true,
    a: ['Creator partnerships|الشراكات مع صنّاع المحتوى', 'Sponsored content|المحتوى المدعوم', 'Affiliate influencers|مؤثرو العمولة', 'Mawthooq licence check|التحقق من رخصة موثوق'] },
  { id: 'affiliates', n: 'Affiliates and referrals|العمولة والإحالة', d: 'Let partners and happy customers sell for you.|دع الشركاء والعملاء الراضين يبيعون عنك.', line: 'BTL',
    a: ['Affiliate programmes|برامج العمولة', 'Referral marketing|التسويق بالإحالة', 'Partner commissions|عمولات الشركاء'] },
  { id: 'mass', n: 'Mass media|الإعلام الجماهيري', d: 'TV, radio, print and billboards, for reach at scale.|التلفزيون والإذاعة والصحف واللوحات، لانتشار واسع.', line: 'ATL', add: true,
    a: ['TV|التلفزيون', 'Radio|الإذاعة', 'Newspapers and magazines|الصحف والمجلات', 'Outdoor and digital billboards|اللوحات الخارجية والرقمية', 'Cinema|السينما'] },
  { id: 'activation', n: 'Activations and events|التفعيل والفعاليات', d: 'Meet customers in person, where they shop and gather.|قابل عملاءك وجهاً لوجه حيث يتسوّقون ويجتمعون.', line: 'BTL', add: true,
    a: ['Events and exhibitions|الفعاليات والمعارض', 'Sampling and demos|العيّنات والتجارب', 'In-store and point of sale|داخل المتجر ونقاط البيع', 'Direct mail and flyers|البريد المباشر والمطبوعات', 'Pop-ups and experiences|المتاجر المؤقتة والتجارب', 'Mall kiosks|أكشاك المولات'] },
 ] },
 { id: 'grow', n: 'Grow|النمو', s: 'Win customers, keep them, bring them back|اكسب العملاء وحافظ عليهم واستعِدهم', svc: [
  { id: 'acquisition', n: 'Acquisition|استقطاب العملاء', d: 'Turn interest into first orders.|حوّل الاهتمام إلى أول طلب.', line: 'TTL',
    a: ['Lead generation|توليد العملاء المحتملين', 'Landing pages|صفحات الهبوط', 'Conversion funnels|مسارات التحويل'] },
  { id: 'onboarding', n: 'Onboarding|الترحيب والتهيئة', d: 'Make the first week feel easy.|اجعل الأسبوع الأول سهلاً.', line: 'BTL', dna: true,
    a: ['Welcome messages|رسائل الترحيب', 'Tutorials|الشروحات', 'Product education|التعريف بالمنتج'] },
  { id: 'engagement', n: 'Engagement|التفاعل', d: 'Stay useful between orders.|ابقَ مفيداً بين طلب وآخر.', line: 'BTL',
    a: ['Content updates|تحديثات المحتوى', 'Push notifications|الإشعارات', 'Community interaction|التفاعل المجتمعي'] },
  { id: 'retention', n: 'Retention and loyalty|الاحتفاظ والولاء', d: 'Reward the people who keep coming back.|كافئ من يعودون إليك دائماً.', line: 'BTL',
    a: ['Loyalty programmes|برامج الولاء', 'Rewards|المكافآت', 'Subscription renewal|تجديد الاشتراك'] },
  { id: 'reactivation', n: 'Win-back|استعادة العملاء', d: 'Bring quiet customers back, unless their account says not now.|أعِد العملاء المنقطعين، إلا إذا قال حسابهم ليس الآن.', line: 'BTL', live: true,
    a: ['Win-back campaigns|حملات الاستعادة', 'Retargeting ads|إعلانات إعادة الاستهداف', 'Special offers|العروض الخاصة'] },
  { id: 'cro', n: 'Conversion optimisation|تحسين التحويل', d: 'Fix the leaks between visit and order.|أصلح التسرّب بين الزيارة والطلب.', line: '',
    a: ['A/B testing|اختبارات A/B', 'Experience improvements|تحسين التجربة', 'Funnel optimisation|تحسين المسار'] },
  { id: 'experiments', n: 'Growth experiments|تجارب النمو', d: 'Test small, learn fast, scale what works.|جرّب صغيراً وتعلّم بسرعة ووسّع ما ينجح.', line: '',
    a: ['Rapid testing|الاختبار السريع', 'Viral loops|الحلقات الفيروسية', 'Referral mechanics|آليات الإحالة'] },
  { id: 'plg', n: 'Product-led growth|النمو بقيادة المنتج', d: 'Let the product sell itself.|دع المنتج يبيع نفسه.', line: '',
    a: ['Free trials|التجارب المجانية', 'Freemium|النموذج المجاني المحدود', 'In-product marketing|التسويق داخل المنتج'] },
 ] },
 { id: 'measure', n: 'Measure|القياس والإدارة', s: 'See what works and run the team|اعرف ما ينجح وأدِر فريقك', svc: [
  { id: 'analytics', n: 'Analytics|التحليلات', d: 'Numbers that tell you what to do next.|أرقام تخبرك بخطوتك التالية.', line: '',
    a: ['KPI dashboards|لوحات المؤشرات', 'Conversion tracking|تتبع التحويلات', 'Attribution|نسب النتائج للقنوات', 'Cohort analysis|تحليل الفئات'] },
  { id: 'martech', n: 'Marketing technology|تقنيات التسويق', d: 'Connect the tools you already use.|اربط الأدوات التي تستخدمها أصلاً.', line: '',
    a: ['CRM|إدارة علاقات العملاء', 'Marketing automation|أتمتة التسويق', 'Customer data platform|منصة بيانات العملاء', 'Data integrations|تكامل البيانات'] },
  { id: 'management', n: 'Planning and budget|التخطيط والميزانية', d: 'One plan, one budget, one calendar for the team.|خطة واحدة وميزانية واحدة وتقويم واحد للفريق.', line: '',
    a: ['Budget planning|تخطيط الميزانية', 'Campaign management|إدارة الحملات', 'Workflows and approvals|سير العمل والموافقات', 'Team collaboration|تعاون الفريق'] },
 ] },
];
const SVC = {}; MK.forEach(g => g.svc.forEach(s => { s.g = g; SVC[s.id] = s; }));
const N_SVC = Object.keys(SVC).length, N_ACT = Object.values(SVC).reduce((n, s) => n + s.a.length, 0);

const OPT = {
  industry: ['E-commerce|التجارة الإلكترونية', 'Food and beverage|الأغذية والمشروبات', 'Retail|التجزئة', 'Beauty and health|التجميل والصحة', 'Services|الخدمات', 'Other|أخرى'],
  city: ['Riyadh|الرياض', 'Jeddah|جدة', 'Dammam|الدمام', 'Makkah|مكة المكرمة', 'Madinah|المدينة المنورة', 'Across the Kingdom|كل المملكة'],
  values: ['Honest|الصدق', 'Fast|السرعة', 'Quality|الجودة', 'Care|الاهتمام', 'Local pride|الفخر المحلي', 'Generous|الكرم', 'Simple|البساطة', 'Bold|الجرأة', 'Fair price|السعر العادل', 'Innovation|الابتكار', 'Family|العائلة', 'Trust|الثقة'],
  arch: [['Sage|الحكيم', 'Knows and explains|يعرف ويشرح'], ['Caregiver|الراعي', 'Protects and helps|يحمي ويساعد'], ['Hero|البطل', 'Wins against the odds|ينتصر رغم الصعاب'], ['Creator|المبدع', 'Makes new things|يصنع الجديد'], ['Explorer|المستكشف', 'Seeks the new|يبحث عن المختلف'], ['Jester|المرِح', 'Brings joy|يصنع البهجة'], ['Ruler|القائد', 'Sets the standard|يضع المعيار'], ['Everyday friend|الصديق القريب', 'One of us|واحد منّا']],
  photo: ['Warm and local|دافئ ومحلي', 'Bright and airy|مشرق وواسع', 'Clean studio|استوديو نظيف', 'Close-up product|لقطات قريبة للمنتج', 'Real moments|لحظات حقيقية', 'Bold colour|ألوان جريئة'],
  fontAr: ['IBM Plex Sans Arabic', 'Tajawal', 'Cairo', 'Almarai'],
  fontEn: ['Inter', 'Space Grotesk', 'Poppins'],
  dialect: ['saudi|Saudi everyday Arabic|لهجة سعودية بيضاء', 'msa|Modern Standard Arabic|العربية الفصحى', 'mix|A mix of both|مزيج بين الاثنين'],
};
const SAMPLE = {
  en: { name: 'Qahwa House', industry: 0, city: 0, langs: { ar: true, en: true }, purpose: 'Make great Saudi coffee part of every home\'s day.', mission: 'We roast, pack and deliver specialty coffee across the Kingdom within 48 hours.', values: [2, 3, 4, 0], arch: [1, 3], colors: ['#3B2416', '#C8893B', '#F4EDE3', '#1E1A17'], fontAr: 'Tajawal', fontEn: 'Poppins', photo: [0, 3], formal: 72, playful: 45, warm: 82, dialect: 'saudi', use: ['أبشر', 'fresh roast', 'your order'], avoid: ['dear valued customer', 'عزيزي العميل', 'cheap'], icp: 'Coffee lovers aged 22 to 40 in Riyadh and Jeddah who order online at least twice a month.', vp: 'Specialty coffee roasted this week, at your door in 48 hours.', comp: ['Coffee chain A', 'Roastery B'] },
  ar: { name: 'بيت القهوة', industry: 0, city: 0, langs: { ar: true, en: true }, purpose: 'نجعل القهوة السعودية المختصة جزءاً من يوم كل بيت.', mission: 'نحمّص القهوة المختصة ونغلّفها ونوصلها في كل المملكة خلال 48 ساعة.', values: [2, 3, 4, 0], arch: [1, 3], colors: ['#3B2416', '#C8893B', '#F4EDE3', '#1E1A17'], fontAr: 'Tajawal', fontEn: 'Poppins', photo: [0, 3], formal: 72, playful: 45, warm: 82, dialect: 'saudi', use: ['أبشر', 'تحميص طازج', 'طلبك'], avoid: ['عزيزي العميل', 'رخيص', 'نحيطكم علماً'], icp: 'محبّو القهوة بين 22 و40 سنة في الرياض وجدة، يطلبون أونلاين مرتين على الأقل في الشهر.', vp: 'قهوة مختصة محمّصة هذا الأسبوع، عند بابك خلال 48 ساعة.', comp: ['سلسلة مقاهٍ أ', 'محمصة ب'] },
};
const blank = () => ({ name: '', industry: 0, city: 0, langs: { ar: true, en: false }, purpose: '', mission: '', values: [], arch: [], logo: null, colors: ['#2E2A3A', '#E9E4DA'], fontAr: 'IBM Plex Sans Arabic', fontEn: 'Inter', photo: [], formal: 60, playful: 40, warm: 65, dialect: 'saudi', use: [], avoid: [], icp: '', vp: '', comp: [] });

Object.assign(T.en, {
  'nav.brand': 'Brand DNA', 'nav.marketing': 'Marketing', 'nav.wizard': 'Create Brand DNA',
  'sec.grow': 'Brand and marketing', 'sec.cx': 'Customers', 'sec.trust': 'Trust',
  'mk.lede': 'Every marketing activity in one place, from the first plan to the last report. Open a service and add what you need to your plan.',
  'mk.search': `Search ${N_SVC} services and ${N_ACT} activities`, 'mk.all': 'All',
  'line.ATL': 'Above the line: mass media like TV, radio, print and billboards', 'line.BTL': 'Below the line: direct and targeted, like WhatsApp, email and events', 'line.TTL': 'Through the line: both at once, mostly digital',
  'line.ATLs': 'mass media', 'line.BTLs': 'direct and targeted', 'line.TTLs': 'both, mostly digital',
  'mk.live': 'In MVP', 'mk.roadmap': 'On the roadmap', 'mk.plan': 'Your plan', 'mk.add': 'Add to plan', 'mk.added': 'In your plan', 'mk.acts': 'activities',
  'mk.open': 'Open campaigns', 'mk.seeall': 'See all marketing', 'mk.none': 'Nothing matches. Try another word, or show all.', 'mk.close': 'Close',
  'mk.dna': 'Uses your Brand DNA', 'mk.dnaDesc': 'Your tone, your words to avoid and your colours are applied here.', 'mk.dnaMissing': 'Create your Brand DNA first, so everything here sounds like you.',
  'mk.what': 'What you can do here', 'mk.status': 'Status', 'mk.lineH': 'Type', 'mk.found': 'Found in', 'mk.foundation': 'Foundation',
  'mk.mawthooq': 'Saudi rule: creators who advertise need a Mawthooq licence from the media regulator. Helixion checks it before you book anyone.',
  'mk.seasons': 'Islamic dates move each year with the Hijri calendar; the plan updates them for you.',
  'mk.liveNote': 'Live in the first version: every send is checked against the account, the consent ledger and your Brand DNA.',
  'mk.addedToast': 'Added to your plan.', 'mk.removedToast': 'Removed from your plan.',
  'dna.lede': 'Who your brand is, how it looks and how it sounds. Helixion checks every message against it before it goes out.',
  'dna.emptyH': 'Create your Brand DNA', 'dna.emptyP': 'Five short steps, about ten minutes. Everything you send will sound like you, and you can change it any time.', 'dna.start': 'Create Brand DNA',
  'dna.edit': 'Edit Brand DNA', 'dna.complete': 'complete', 'p.strategy': 'Strategy', 'p.identity': 'Identity', 'p.awareness': 'Awareness', 'p.reputation': 'Reputation',
  'dna.plan': 'Plan it in Marketing', 'dna.planned': 'planned', 'dna.kit': 'Brand kit', 'dna.kitP': 'The files your team and agencies need. Upload once, use everywhere.', 'dna.ready': 'Ready', 'dna.addf': 'Add', 'dna.voice': 'How you sound',
  'dna.used': 'Where your DNA works', 'dna.used1': 'Every WhatsApp and SMS message is checked against your tone and your words to avoid before it is sent.', 'dna.used2': 'Every marketing service starts from your colours, fonts and values.', 'dna.used3': 'Agents see your voice next to every reply in the inbox.',
  'dna.saved': 'Brand DNA saved. Everything you send now follows it.', 'dna.upload': 'Uploads are not wired in this prototype.',
  'w.1': 'Basics', 'w.2': 'Why you exist', 'w.3': 'Look', 'w.4': 'Voice', 'w.5': 'Audience',
  'w.1h': 'Let\'s start with the basics.', 'w.1p': 'The essentials. You can change any of it later.',
  'w.2h': 'Why does your brand exist?', 'w.2p': 'Beyond making money. This is what every message comes back to.',
  'w.3h': 'How does your brand look?', 'w.3p': 'Your logo, colours, fonts and the feel of your photos.',
  'w.4h': 'How does your brand sound?', 'w.4p': 'Move the dials and watch the sample message change.',
  'w.5h': 'Who do you serve?', 'w.5p': 'The people you want, and why they should pick you.',
  'w.next': 'Next', 'w.back': 'Back', 'w.save': 'Save Brand DNA', 'w.sample': 'Fill with sample answers', 'w.suggest': 'Suggest', 'w.suggested': 'Suggestion. Edit it freely.', 'w.cancel': 'Cancel',
  'f.name': 'Brand name', 'f.namePh': 'For example, Qahwa House', 'f.industry': 'Industry', 'f.city': 'Main city', 'f.langs': 'Languages you speak to customers in', 'f.ar': 'Arabic', 'f.en': 'English',
  'f.purpose': 'Purpose', 'f.purposeH': 'Why you exist, in one sentence.', 'f.mission': 'Mission', 'f.missionH': 'What you do every day to live it.', 'f.values': 'Values', 'f.valuesH': 'Pick up to 4.', 'f.arch': 'Personality', 'f.archH': 'Pick 1 or 2.',
  'f.logo': 'Logo', 'f.upload': 'Upload logo', 'f.logoH': 'PNG or SVG. It stays on this device in the prototype.', 'f.colors': 'Colours', 'f.colorsH': 'Main colour first. Up to 5.', 'f.fontAr': 'Arabic font', 'f.fontEn': 'Latin font', 'f.photo': 'Photography style',
  'd.formal': 'Formal', 'd.casual': 'Casual', 'd.serious': 'Serious', 'd.playful': 'Playful', 'd.distant': 'Distant', 'd.warm': 'Warm',
  'f.dialect': 'Arabic style', 'f.use': 'Words we use', 'f.avoid': 'Words we avoid', 'f.wordPh': 'Type a word, press Enter',
  'f.icp': 'Who you serve', 'f.icpH': 'Age, city, habits. Be specific.', 'f.vp': 'Value proposition', 'f.vpH': 'Why they should pick you, in one line.', 'f.comp': 'Main competitors',
  'pv.h': 'Your Brand DNA', 'pv.voice': 'How you sound', 'pv.sample': 'Sample WhatsApp message', 'pv.noname': 'Your brand',
});
Object.assign(T.ar, {
  'nav.brand': 'DNA العلامة', 'nav.marketing': 'التسويق', 'nav.wizard': 'إنشاء DNA العلامة',
  'sec.grow': 'العلامة والتسويق', 'sec.cx': 'العملاء', 'sec.trust': 'الثقة',
  'mk.lede': 'كل أنشطة التسويق في مكان واحد، من أول خطة إلى آخر تقرير. افتح أي خدمة وأضف ما تحتاجه إلى خطتك.',
  'mk.search': `ابحث في ${N_SVC} خدمة و${N_ACT} نشاطاً`, 'mk.all': 'الكل',
  'line.ATL': 'فوق الخط: الإعلام الجماهيري مثل التلفزيون والإذاعة والصحف واللوحات', 'line.BTL': 'تحت الخط: تواصل مباشر وموجّه مثل واتساب والبريد والفعاليات', 'line.TTL': 'عبر الخط: الاثنان معاً، وغالباً رقمي',
  'line.ATLs': 'إعلام جماهيري', 'line.BTLs': 'مباشر وموجّه', 'line.TTLs': 'الاثنان معاً',
  'mk.live': 'في النسخة الأولى', 'mk.roadmap': 'ضمن الخطة القادمة', 'mk.plan': 'خطتك', 'mk.add': 'أضف للخطة', 'mk.added': 'في خطتك', 'mk.acts': 'نشاط',
  'mk.open': 'افتح الحملات', 'mk.seeall': 'كل خدمات التسويق', 'mk.none': 'لا توجد نتائج. جرّب كلمة أخرى أو اعرض الكل.', 'mk.close': 'إغلاق',
  'mk.dna': 'تستخدم DNA علامتك', 'mk.dnaDesc': 'نبرتك والكلمات التي تتجنبها وألوانك تُطبَّق هنا.', 'mk.dnaMissing': 'أنشئ DNA علامتك أولاً ليبدو كل شيء هنا بصوتك.',
  'mk.what': 'ماذا تستطيع أن تفعل هنا', 'mk.status': 'الحالة', 'mk.lineH': 'النوع', 'mk.found': 'موجود في', 'mk.foundation': 'أساسيات',
  'mk.mawthooq': 'نظام سعودي: صانع المحتوى الذي يعلن يحتاج رخصة موثوق من الهيئة المنظمة للإعلام. يتحقق Helixion منها قبل أي تعاقد.',
  'mk.seasons': 'تتغير المواعيد الهجرية كل سنة، والخطة تحدّثها لك تلقائياً.',
  'mk.liveNote': 'متاح في النسخة الأولى: كل إرسال يُفحص مقابل الحساب وسجل الموافقات وDNA علامتك.',
  'mk.addedToast': 'أُضيف إلى خطتك.', 'mk.removedToast': 'حُذف من خطتك.',
  'dna.lede': 'من هي علامتك، وكيف تبدو، وكيف تتكلم. يفحص Helixion كل رسالة مقابلها قبل إرسالها.',
  'dna.emptyH': 'أنشئ DNA علامتك', 'dna.emptyP': 'خمس خطوات قصيرة، حوالي عشر دقائق. كل ما ترسله سيكون بصوتك، وتستطيع تعديله متى شئت.', 'dna.start': 'إنشاء DNA العلامة',
  'dna.edit': 'تعديل DNA العلامة', 'dna.complete': 'مكتمل', 'p.strategy': 'الاستراتيجية', 'p.identity': 'الهوية', 'p.awareness': 'الوعي', 'p.reputation': 'السمعة',
  'dna.plan': 'خطّط لها في التسويق', 'dna.planned': 'في الخطة', 'dna.kit': 'عدة الهوية', 'dna.kitP': 'الملفات التي يحتاجها فريقك والوكالات. ارفعها مرة واستخدمها في كل مكان.', 'dna.ready': 'جاهز', 'dna.addf': 'أضف', 'dna.voice': 'كيف تتكلم',
  'dna.used': 'أين يعمل DNA علامتك', 'dna.used1': 'كل رسالة واتساب ونصية تُفحص مقابل نبرتك والكلمات التي تتجنبها قبل الإرسال.', 'dna.used2': 'كل خدمة تسويق تبدأ من ألوانك وخطوطك وقيمك.', 'dna.used3': 'يرى الموظفون نبرتك بجانب كل رد في صندوق الوارد.',
  'dna.saved': 'حُفظ DNA العلامة. كل ما ترسله الآن يتبعه.', 'dna.upload': 'الرفع غير مفعّل في هذا النموذج.',
  'w.1': 'الأساسيات', 'w.2': 'سبب الوجود', 'w.3': 'الشكل', 'w.4': 'الصوت', 'w.5': 'الجمهور',
  'w.1h': 'لنبدأ بالأساسيات.', 'w.1p': 'المعلومات الأساسية، وتستطيع تعديلها لاحقاً.',
  'w.2h': 'لماذا توجد علامتك؟', 'w.2p': 'أبعد من الربح. هذا ما تعود إليه كل رسالة.',
  'w.3h': 'كيف تبدو علامتك؟', 'w.3p': 'شعارك وألوانك وخطوطك وروح صورك.',
  'w.4h': 'كيف تتكلم علامتك؟', 'w.4p': 'حرّك المؤشرات وشاهد الرسالة تتغير.',
  'w.5h': 'من تخدم؟', 'w.5p': 'الناس الذين تريدهم، ولماذا يختارونك.',
  'w.next': 'التالي', 'w.back': 'رجوع', 'w.save': 'حفظ DNA العلامة', 'w.sample': 'املأ بإجابات تجريبية', 'w.suggest': 'اقترح', 'w.suggested': 'اقتراح، عدّله كما تشاء.', 'w.cancel': 'إلغاء',
  'f.name': 'اسم العلامة', 'f.namePh': 'مثلاً: بيت القهوة', 'f.industry': 'المجال', 'f.city': 'المدينة الرئيسية', 'f.langs': 'اللغات التي تخاطب بها عملاءك', 'f.ar': 'العربية', 'f.en': 'الإنجليزية',
  'f.purpose': 'الغاية', 'f.purposeH': 'لماذا توجد، في جملة واحدة.', 'f.mission': 'الرسالة', 'f.missionH': 'ما تفعله كل يوم لتحققها.', 'f.values': 'القيم', 'f.valuesH': 'اختر حتى 4.', 'f.arch': 'الشخصية', 'f.archH': 'اختر واحدة أو اثنتين.',
  'f.logo': 'الشعار', 'f.upload': 'ارفع الشعار', 'f.logoH': 'PNG أو SVG. يبقى على هذا الجهاز في النموذج.', 'f.colors': 'الألوان', 'f.colorsH': 'اللون الرئيسي أولاً، حتى 5 ألوان.', 'f.fontAr': 'الخط العربي', 'f.fontEn': 'الخط اللاتيني', 'f.photo': 'أسلوب التصوير',
  'd.formal': 'رسمي', 'd.casual': 'عفوي', 'd.serious': 'جاد', 'd.playful': 'مرِح', 'd.distant': 'متحفّظ', 'd.warm': 'دافئ',
  'f.dialect': 'أسلوب العربية', 'f.use': 'كلمات نستخدمها', 'f.avoid': 'كلمات نتجنبها', 'f.wordPh': 'اكتب كلمة واضغط Enter',
  'f.icp': 'من تخدم', 'f.icpH': 'العمر والمدينة والعادات، بالتحديد.', 'f.vp': 'عرض القيمة', 'f.vpH': 'لماذا يختارونك، في سطر واحد.', 'f.comp': 'أبرز المنافسين',
  'pv.h': 'DNA علامتك', 'pv.voice': 'كيف تتكلم', 'pv.sample': 'رسالة واتساب تجريبية', 'pv.noname': 'علامتك',
});

Object.assign(S, { mq: '', mline: 'all', mmq: '', mmline: 'all', svc: 'messaging', plan: new Set(), dna: null, draft: null, wstep: 1 });
const tx = s => String(s).split('|')[S.lang === 'ar' ? 1 : 0];
const NAV_MK = ['marketing', 'service', 'campaigns'];

/* ---------------------------------------------------------------- rail */
function setupRail() {
  const rail = document.querySelector('.rail');
  const ic = (p, cls = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${p}</svg>`;
  const camp = rail.querySelector('[data-go="campaigns"]'); camp && camp.remove();
  const first = rail.querySelector('[data-go="inbox"]');
  first.insertAdjacentHTML('beforebegin',
    `<div class="rail-sec" data-t="sec.grow"></div>
     <button class="nav" data-go="brand">${ic('<path d="M8 3c0 6 8 6 8 12s-8 6-8 6"/><path d="M16 3c0 6-8 6-8 12s8 6 8 6"/><path d="M9 7h6M9 17h6"/>')}<span data-t="nav.brand"></span></button>
     <button class="nav" id="mk-nav" aria-haspopup="true" aria-expanded="false" aria-controls="mk-menu">${ic('<path d="M4 10v4h3l7 4V6L7 10z"/><path d="M17 9.5a3.5 3.5 0 0 1 0 5"/>', 'flip')}<span data-t="nav.marketing"></span>${ic('<path d="M7 10l5 5 5-5"/>', 'caret')}</button>
     <div class="rail-sec" data-t="sec.cx"></div>`);
  rail.querySelector('[data-go="log"]').insertAdjacentHTML('beforebegin', '<div class="rail-sec" data-t="sec.trust"></div>');
  rail.querySelector('[data-go="brand"]').addEventListener('click', () => { closeMenu(); go('brand'); });
  document.body.insertAdjacentHTML('beforeend', `<div class="mk-backdrop" id="mk-backdrop"></div><div class="mk-menu" id="mk-menu" role="dialog" aria-label="Marketing"></div>`);
  $('#mk-nav').addEventListener('click', () => $('#mk-menu').classList.contains('on') ? closeMenu() : openMenu());
  $('#mk-backdrop').addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}
function openMenu() { renderMenu(); $('#mk-menu').classList.add('on'); $('#mk-backdrop').classList.add('on'); $('#mk-nav').setAttribute('aria-expanded', 'true'); setTimeout(() => $('#mm-q') && $('#mm-q').focus(), 30); }
function closeMenu() { const m = $('#mk-menu'); if (!m) return; m.classList.remove('on'); $('#mk-backdrop').classList.remove('on'); $('#mk-nav').setAttribute('aria-expanded', 'false'); }

/* ---------------------------------------------------------------- search and filter */
function match(s, q, line) {
  if (line !== 'all' && s.line !== line) return null;
  if (!q) return { hits: [] };
  const ql = q.toLowerCase(), has = x => x.toLowerCase().includes(ql);
  const hits = s.a.filter(a => a.split('|').some(has)).map(tx);
  return (s.n.split('|').some(has) || s.d.split('|').some(has) || s.g.n.split('|').some(has) || hits.length) ? { hits } : null;
}
const lineSegs = (cur, attr) => `<div class="segs" role="group">${['all', 'ATL', 'BTL', 'TTL'].map(l =>
  `<button ${attr}="${l}" aria-pressed="${cur === l}" title="${l === 'all' ? '' : esc(t('line.' + l))}">${l === 'all' ? t('mk.all') : l}</button>`).join('')}</div>`;
const lineTag = s => s.line ? `<span class="lt" title="${esc(t('line.' + s.line))}">${s.line}</span>` : '';

function renderMenu() {
  const q = S.mmq.trim();
  const cols = MK.map(g => {
    const items = g.svc.map(s => [s, match(s, q, S.mmline)]).filter(x => x[1]);
    if (!items.length) return '';
    return `<div class="col"><h5>${tx(g.n)}</h5><p>${tx(g.s)}</p>${items.map(([s]) => `<button data-svc="${s.id}"><span>${tx(s.n)}</span>${lineTag(s)}</button>`).join('')}</div>`;
  }).join('');
  $('#mk-menu').innerHTML = `
    <div class="head"><input id="mm-q" type="search" dir="auto" autocomplete="off" placeholder="${esc(t('mk.search'))}" value="${esc(S.mmq)}">
      <button class="btn secondary close" id="mm-close">${t('mk.close')}</button></div>
    ${lineSegs(S.mmline, 'data-mml')}
    <div class="cols">${cols || `<p class="muted">${t('mk.none')}</p>`}</div>
    <div class="foot"><div class="legend-line">${['ATL', 'BTL', 'TTL'].map(l => `<span><b>${l}</b>${t('line.' + l + 's')}</span>`).join('')}</div>
      <button class="btn quiet" id="mm-all">${t('mk.seeall')}</button></div>`;
  const qi = $('#mm-q');
  qi.addEventListener('input', e => { S.mmq = e.target.value; const pos = e.target.selectionStart; renderMenu(); const n = $('#mm-q'); n.focus(); n.setSelectionRange(pos, pos); });
  $('#mk-menu').querySelectorAll('[data-mml]').forEach(b => b.addEventListener('click', () => { S.mmline = b.dataset.mml; renderMenu(); }));
  $('#mk-menu').querySelectorAll('[data-svc]').forEach(b => b.addEventListener('click', () => openSvc(b.dataset.svc)));
  $('#mm-all').addEventListener('click', () => { closeMenu(); go('marketing'); });
  $('#mm-close').addEventListener('click', closeMenu);
}
function openSvc(id) { S.svc = id; closeMenu(); go('service'); $('#service').scrollTop = 0; }

/* ---------------------------------------------------------------- marketing home */
function renderMarketing() {
  const q = S.mq.trim();
  const groups = MK.map(g => {
    const items = g.svc.map(s => [s, match(s, q, S.mline)]).filter(x => x[1]);
    if (!items.length) return '';
    return `<section class="mk-group"><div class="mk-group-head"><h3>${tx(g.n)}</h3><p>${tx(g.s)}</p><span class="num">${items.length}</span></div>
      <div class="mk-cards">${items.map(([s, m]) => `<button class="mk-card" data-svc="${s.id}">
        <span class="tags">${lineTag(s)}${s.live ? `<span class="mvp">${t('mk.live')}</span>` : ''}</span>
        <h4>${tx(s.n)}</h4><p>${tx(s.d)}</p>
        ${m.hits.length ? `<span class="hit">${t('mk.found')}: ${m.hits.map(esc).join(', ')}</span>` : ''}
        <span class="foot"><span><span class="num">${s.a.length}</span> ${t('mk.acts')}</span><span class="num">${S.plan.size && s.a.some((_, i) => S.plan.has(s.id + ':' + i)) ? '●' : ''}</span></span>
      </button>`).join('')}</div></section>`;
  }).join('');
  const plan = [...S.plan].map(k => { const [id, i] = k.split(':'); return [k, SVC[id], SVC[id].a[i]]; });
  $('#marketing').innerHTML = `<div class="page-inner" style="max-width:1180px">
    <div class="head-row"><div><h2>${t('nav.marketing')}</h2><p class="lede">${t('mk.lede')}</p></div></div>
    <div class="mk-tools">
      <input class="bigsearch" id="mk-q" type="search" dir="auto" autocomplete="off" placeholder="${esc(t('mk.search'))}" value="${esc(S.mq)}">
      <div class="row2">${lineSegs(S.mline, 'data-ml')}<div class="legend-line">${['ATL', 'BTL', 'TTL'].map(l => `<span><b>${l}</b>${t('line.' + l + 's')}</span>`).join('')}</div></div>
    </div>
    ${plan.length ? `<div class="card2"><span class="eyebrow">${t('mk.plan')} · <span class="num">${plan.length}</span></span>
      <div class="plan-strip" style="margin-top:var(--s3)">${plan.map(([k, s, a]) => `<span class="pi">${esc(tx(a))} <span class="muted">· ${esc(tx(s.n))}</span><button data-unplan="${k}" aria-label="remove">×</button></span>`).join('')}</div></div>` : ''}
    ${groups || `<div class="empty" style="display:flex"><svg class="helix-art"></svg><span>${t('mk.none')}</span></div>`}
  </div>`;
  const qi = $('#mk-q');
  qi.addEventListener('input', e => { S.mq = e.target.value; const pos = e.target.selectionStart; renderMarketing(); const n = $('#mk-q'); n.focus(); n.setSelectionRange(pos, pos); });
  $('#marketing').querySelectorAll('[data-ml]').forEach(b => b.addEventListener('click', () => { S.mline = b.dataset.ml; renderMarketing(); }));
  $('#marketing').querySelectorAll('[data-svc]').forEach(b => b.addEventListener('click', () => openSvc(b.dataset.svc)));
  $('#marketing').querySelectorAll('[data-unplan]').forEach(b => b.addEventListener('click', () => { S.plan.delete(b.dataset.unplan); renderMarketing(); toast(t('mk.removedToast')); }));
  $('#marketing').querySelectorAll('.helix-art').forEach(s => helix(s, 160, 36, false));
}

/* ---------------------------------------------------------------- service page */
function renderService() {
  const s = SVC[S.svc], g = s.g;
  const acts = s.a.map((a, i) => { const k = s.id + ':' + i, on = S.plan.has(k);
    return `<li><span>${esc(tx(a))}</span><button class="btn ${on ? 'done' : 'secondary'}" data-plan="${k}" aria-pressed="${on}">${t(on ? 'mk.added' : 'mk.add')}</button></li>`; }).join('');
  const d = S.dna;
  const dnaCard = (s.dna || s.live) ? (d ? `<div class="card2"><span class="eyebrow">${t('mk.dna')}</span>
      <p class="muted" style="font-size:var(--t-xs);margin:6px 0 var(--s3)">${t('mk.dnaDesc')}</p>
      <div class="dots" style="margin-bottom:var(--s3)">${d.colors.map(c => `<i style="background:${c}"></i>`).join('')}</div>
      ${voiceBubble(d)}</div>`
    : `<div class="card2"><span class="eyebrow">${t('mk.dna')}</span><p class="muted" style="font-size:var(--t-sm);margin:6px 0 var(--s4)">${t('mk.dnaMissing')}</p><button class="btn secondary" data-go-brand>${t('dna.start')}</button></div>`) : '';
  $('#service').innerHTML = `<div class="page-inner" style="max-width:1180px">
    <nav class="crumbs" aria-label="breadcrumb"><button data-crumb="marketing">${t('nav.marketing')}</button><span class="sep" aria-hidden="true"></span><span>${tx(g.n)}</span><span class="sep" aria-hidden="true"></span><span>${tx(s.n)}</span></nav>
    <div class="head-row"><div><h2>${tx(s.n)}</h2><p class="lede">${tx(s.d)}</p>
      <div style="display:flex;gap:8px;margin-top:var(--s3);flex-wrap:wrap">${lineTag(s)}${s.live ? `<span class="mvp">${t('mk.live')}</span>` : `<span class="lt">${t('mk.roadmap')}</span>`}</div></div>
      ${s.id === 'messaging' || s.id === 'reactivation' ? `<button class="btn primary" data-go-camp>${t('mk.open')}</button>` : ''}</div>
    <div class="svc-grid">
      <div class="card2"><span class="eyebrow">${t('mk.what')}</span><ul class="acts" style="margin-top:var(--s2)">${acts}</ul></div>
      <div class="side">
        ${s.live ? `<p class="rule-note">${t('mk.liveNote')}</p>` : ''}
        ${s.mawthooq ? `<p class="rule-note">${t('mk.mawthooq')}</p>` : ''}
        ${s.id === 'seasons' ? `<p class="rule-note">${t('mk.seasons')}</p>` : ''}
        ${dnaCard}
        <div class="card2"><span class="eyebrow">${t('mk.lineH')}</span><p style="font-size:var(--t-sm);margin-top:6px">${s.line ? `<b class="num">${s.line}</b> · ${t('line.' + s.line)}` : t('mk.foundation')}</p></div>
      </div>
    </div>
  </div>`;
  $('#service').querySelectorAll('[data-plan]').forEach(b => b.addEventListener('click', () => {
    const k = b.dataset.plan, on = S.plan.has(k); on ? S.plan.delete(k) : S.plan.add(k); renderService(); toast(t(on ? 'mk.removedToast' : 'mk.addedToast'));
  }));
  $('#service').querySelector('[data-crumb]').addEventListener('click', () => go('marketing'));
  const gc = $('#service').querySelector('[data-go-camp]'); gc && gc.addEventListener('click', () => go('campaigns'));
  const gb = $('#service').querySelector('[data-go-brand]'); gb && gb.addEventListener('click', () => startWizard());
}

/* ---------------------------------------------------------------- voice sample */
function voiceText(d, lang) {
  const casual = d.formal > 55, warm = d.warm > 55, playful = d.playful > 60, brand = d.name || t('pv.noname');
  if (lang === 'ar') {
    const msa = d.dialect === 'msa';
    let m = casual ? (msa ? 'مرحباً! طلبك سيتأخر قليلاً، وسيصلك الساعة 5:30 مساءً.' : 'هلا! طلبك بيتأخر شوي، وبيوصلك الساعة 5:30 العصر.')
                   : 'عميلنا العزيز، نود إعلامك بأن طلبك سيتأخر وسيصلك الساعة 5:30 مساءً.';
    m += warm ? (msa ? ' نقدّر صبرك كثيراً.' : ' نقدّر صبرك والله.') : ' شكراً لتفهمك.';
    return m + (playful ? ' ☕' : '') + ` · ${brand}`;
  }
  let m = casual ? 'Hey! Quick heads up: your order is running a little late. It\'ll be with you by 5:30 pm.' : 'Dear customer, your order is delayed and will arrive at 5:30 pm.';
  m += warm ? ' Thanks so much for bearing with us.' : ' Thank you for your patience.';
  return m + (playful ? ' ☕' : '') + ` · ${brand}`;
}
function voiceBubble(d) {
  const langs = []; if (d.langs.ar) langs.push('ar'); if (d.langs.en || !langs.length) langs.push('en');
  return langs.map(l => `<div class="voice-bubble ${l === 'ar' ? 'ar' : ''}" lang="${l}" dir="${l === 'ar' ? 'rtl' : 'ltr'}" style="font-family:${l === 'ar' ? `'${d.fontAr}'` : `'${d.fontEn}'`},var(--font-body);${langs.length > 1 ? 'margin-bottom:8px' : ''}">${esc(voiceText(d, l))}</div>`).join('');
}

/* ---------------------------------------------------------------- Brand DNA hub */
function filled(d) {
  const checks = [d.name, d.purpose, d.mission, d.values.length, d.arch.length, d.logo, d.colors.length >= 2, d.photo.length, d.use.length || d.avoid.length, d.icp, d.vp];
  return Math.round(100 * checks.filter(Boolean).length / checks.length);
}
const logoTile = (d, big) => d.logo ? `<div class="dna-logo"><img src="${d.logo}" alt=""></div>`
  : `<div class="dna-logo" style="background:${d.colors[0] || 'var(--surface-raised)'};color:${d.colors[1] || '#fff'}">${esc((d.name || '?').trim().charAt(0) || '?')}</div>`;
function renderBrand() {
  const d = S.dna, el = $('#brand');
  if (!d) {
    el.innerHTML = `<div class="page-inner"><div class="head-row"><div><h2>${t('nav.brand')}</h2><p class="lede">${t('dna.lede')}</p></div></div>
      <div class="card2 empty-dna"><svg class="helix" id="dna-hx"></svg><h2>${t('dna.emptyH')}</h2><p>${t('dna.emptyP')}</p><button class="btn primary" id="dna-start">${t('dna.start')}</button></div></div>`;
    helix($('#dna-hx'), 420, 48, false);
    $('#dna-start').addEventListener('click', () => startWizard());
    return;
  }
  const pct = filled(d), item = (ok, k, v) => `<li class="${ok ? 'ok' : ''}"><span class="o"></span><span>${k}</span><span class="v">${esc(v || '')}</span></li>`;
  const plannedIn = id => SVC[id].a.filter((_, i) => S.plan.has(id + ':' + i)).length;
  const pill = (title, rows, extra) => `<div class="card2 pillar"><h3>${title}${extra || ''}</h3><ul>${rows}</ul></div>`;
  const svcRows = id => SVC[id].a.map((a, i) => item(S.plan.has(id + ':' + i), esc(tx(a)), S.plan.has(id + ':' + i) ? t('dna.planned') : '')).join('');
  const kit = [['Logo|الشعار', d.logo], ['Colours|الألوان', d.colors.length >= 2], ['Fonts|الخطوط', true], ['Tone of voice|نبرة الصوت', d.use.length || d.avoid.length || true], ['Photography style|أسلوب التصوير', d.photo.length], ['Persona|الشخصية', d.icp], ['Patterns|الأنماط'], ['Sonic identity|الهوية الصوتية'], ['Scent|الهوية العطرية'], ['Interior style|الطابع الداخلي'], ['Moodboard|لوحة الإلهام'], ['Videography style|أسلوب الفيديو'], ['Print files and die cuts|ملفات الطباعة والقوالب'], ['Presentation template|قالب العروض']];
  el.innerHTML = `<div class="page-inner" style="max-width:1180px">
    <div class="dna-hero">${logoTile(d)}<div><h2>${esc(d.name)}</h2><p class="muted" style="font-size:var(--t-sm)">${tx(OPT.industry[d.industry])} · ${tx(OPT.city[d.city])}</p>
      <div class="meter"><i style="width:${pct}%"></i></div><p class="muted" style="font-size:var(--t-xs);margin-top:6px"><span class="num">${pct}%</span> ${t('dna.complete')}</p></div>
      <button class="btn secondary" id="dna-edit">${t('dna.edit')}</button></div>
    <svg class="helix" id="dna-hx" style="width:100%;height:36px"></svg>
    <div class="pillars">
      ${pill(t('p.strategy'), item(d.purpose, tx('Purpose|الغاية'), d.purpose) + item(d.mission, tx('Mission|الرسالة'), d.mission) + item(d.values.length, tx('Values|القيم'), d.values.map(i => tx(OPT.values[i])).join(', ')) + item(d.arch.length, tx('Personality|الشخصية'), d.arch.map(i => tx(OPT.arch[i][0])).join(', ')) + item(d.vp, tx('Value proposition|عرض القيمة'), d.vp))}
      ${pill(t('p.identity'), item(d.logo, tx('Logo|الشعار'), d.logo ? t('dna.ready') : '') + `<li class="ok"><span class="o"></span><span>${tx('Colours|الألوان')}</span><span class="v"><span class="dots" style="display:inline-flex">${d.colors.map(c => `<i style="background:${c};width:14px;height:14px"></i>`).join('')}</span></span></li>` + item(true, tx('Fonts|الخطوط'), `${d.fontAr} · ${d.fontEn}`) + item(true, tx('Tone of voice|نبرة الصوت'), [d.formal > 55 ? t('d.casual') : t('d.formal'), d.warm > 55 ? t('d.warm') : t('d.distant')].join(', ')) + item(d.photo.length, tx('Photography|التصوير'), d.photo.map(i => tx(OPT.photo[i])).join(', ')))}
      ${pill(t('p.awareness'), svcRows('awareness'), ` <span class="num">${plannedIn('awareness')}/${SVC.awareness.a.length}</span>`).replace('</ul></div>', `</ul><button class="btn quiet more" data-svc="awareness">${t('dna.plan')}</button></div>`)}
      ${pill(t('p.reputation'), svcRows('reputation'), ` <span class="num">${plannedIn('reputation')}/${SVC.reputation.a.length}</span>`).replace('</ul></div>', `</ul><button class="btn quiet more" data-svc="reputation">${t('dna.plan')}</button></div>`)}
    </div>
    <div class="pillars">
      <div class="card2"><span class="eyebrow">${t('dna.voice')}</span><div style="margin-top:var(--s3)">${voiceBubble(d)}</div></div>
      <div class="card2"><span class="eyebrow">${t('dna.used')}</span><ul class="works" style="margin-top:var(--s3)">
        ${['dna.used1', 'dna.used2', 'dna.used3'].map(k => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3c0 6 8 6 8 12s-8 6-8 6"/><path d="M16 3c0 6-8 6-8 12s8 6 8 6"/></svg><span>${t(k)}</span></li>`).join('')}</ul></div>
    </div>
    <div><div class="head-row" style="margin-bottom:var(--s3)"><div><h2 style="font-size:var(--t-lg)">${t('dna.kit')}</h2><p class="lede">${t('dna.kitP')}</p></div></div>
      <div class="kit">${kit.map(([n, ok]) => `<div><span>${tx(n)}</span>${ok ? `<span class="st ok">${t('dna.ready')}</span>` : `<button class="btn quiet" data-up style="height:26px;font-size:11px">${t('dna.addf')}</button>`}</div>`).join('')}</div></div>
  </div>`;
  helix($('#dna-hx'), Math.max(320, el.clientWidth - 80), 36, false);
  $('#dna-edit').addEventListener('click', () => startWizard(true));
  el.querySelectorAll('[data-svc]').forEach(b => b.addEventListener('click', () => openSvc(b.dataset.svc)));
  el.querySelectorAll('[data-up]').forEach(b => b.addEventListener('click', () => toast(t('dna.upload'))));
}

/* ---------------------------------------------------------------- wizard */
function startWizard(edit) { S.draft = edit && S.dna ? JSON.parse(JSON.stringify(S.dna)) : blank(); S.wstep = 1; closeMenu(); go('wizard'); $('#wizard').scrollTop = 0; }
const pickBtns = (list, sel, key, max) => `<div class="pick" data-key="${key}" data-max="${max}">${list.map((o, i) => `<button type="button" data-i="${i}" aria-pressed="${sel.includes(i)}">${esc(tx(o))}</button>`).join('')}</div>`;
const sel = (key, list, cur) => `<select data-f="${key}">${list.map((o, i) => `<option value="${i}" ${+cur === i ? 'selected' : ''}>${esc(tx(o))}</option>`).join('')}</select>`;
const tags = (key, cls) => `<div class="tags-in" data-tags="${key}">${S.draft[key].map((w, i) => `<span class="tg ${cls}">${esc(w)}<button type="button" data-rm="${i}" aria-label="remove">×</button></span>`).join('')}<input dir="auto" placeholder="${esc(t('f.wordPh'))}"></div>`;
function suggest(key) {
  const d = S.draft, n = d.name || t('pv.noname'), ind = tx(OPT.industry[d.industry]).toLowerCase(), city = tx(OPT.city[d.city]);
  const en = { purpose: `${n} exists to make ${ind} feel personal and honest for every customer in Saudi Arabia.`, mission: `Every day we deliver what we promise, on time, and answer every customer like a neighbour.`, vp: `${n}: the ${ind} brand in ${city} that keeps its word.` };
  const ar = { purpose: `توجد ${n} لتجعل ${tx(OPT.industry[d.industry])} تجربة شخصية وصادقة لكل عميل في المملكة.`, mission: 'كل يوم نسلّم ما وعدنا به في وقته، ونرد على كل عميل كأنه جار.', vp: `${n}: العلامة التي تفي بوعدها في ${city}.` };
  return (S.lang === 'ar' ? ar : en)[key];
}
function renderWizard() {
  const d = S.draft || (S.draft = blank()), st = S.wstep;
  const lbl = (k, hint, sug) => `<div class="lbl"><span>${t(k)}${hint ? ` <span class="hint" style="font-weight:400">${t(hint)}</span>` : ''}</span>${sug ? `<button type="button" class="btn quiet" data-sug="${sug}" style="height:26px;font-size:11px">${t('w.suggest')}</button>` : ''}</div>`;
  const ta = (k, ph) => `<textarea data-f="${k}" dir="auto">${esc(d[k])}</textarea>${d['_s_' + k] ? `<span class="sug">${t('w.suggested')}</span>` : ''}`;
  const body = {
    1: `<div class="fld"><label for="f-name">${t('f.name')}</label><input id="f-name" type="text" data-f="name" dir="auto" value="${esc(d.name)}" placeholder="${esc(t('f.namePh'))}"></div>
        <div class="two"><div class="fld"><label>${t('f.industry')}</label>${sel('industry', OPT.industry, d.industry)}</div><div class="fld"><label>${t('f.city')}</label>${sel('city', OPT.city, d.city)}</div></div>
        <div class="fld"><span class="lbl">${t('f.langs')}</span><div class="pick"><button type="button" data-lang-pick="ar" aria-pressed="${d.langs.ar}">${t('f.ar')}</button><button type="button" data-lang-pick="en" aria-pressed="${d.langs.en}">${t('f.en')}</button></div></div>
        <div><button type="button" class="btn quiet" id="w-sample" style="padding:0">${t('w.sample')}</button></div>`,
    2: `<div class="fld">${lbl('f.purpose', 'f.purposeH', 'purpose')}${ta('purpose')}</div>
        <div class="fld">${lbl('f.mission', 'f.missionH', 'mission')}${ta('mission')}</div>
        <div class="fld">${lbl('f.values', 'f.valuesH')}${pickBtns(OPT.values, d.values, 'values', 4)}</div>
        <div class="fld">${lbl('f.arch', 'f.archH')}<div class="archs pick" data-key="arch" data-max="2">${OPT.arch.map((a, i) => `<button type="button" data-i="${i}" aria-pressed="${d.arch.includes(i)}"><b>${esc(tx(a[0]))}</b><span>${esc(tx(a[1]))}</span></button>`).join('')}</div></div>`,
    3: `<div class="fld">${lbl('f.logo')}<div class="drop"><div class="pv">${d.logo ? `<img src="${d.logo}" alt="">` : '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 16V4M7.5 8.5L12 4l4.5 4.5M5 20h14"/></svg>'}</div>
          <div><label class="btn secondary" style="cursor:pointer">${t('f.upload')}<input type="file" id="f-logo" accept="image/*" hidden></label><p class="hint" style="margin-top:6px">${t('f.logoH')}</p></div></div></div>
        <div class="fld">${lbl('f.colors', 'f.colorsH')}<div class="swatches">${d.colors.map((c, i) => `<div class="sw-in"><input type="color" data-color="${i}" value="${c}" aria-label="colour ${i + 1}"><span class="num">${c.toUpperCase()}</span>${d.colors.length > 1 ? `<button type="button" class="x" data-rmc="${i}" aria-label="remove">×</button>` : ''}</div>`).join('')}${d.colors.length < 5 ? '<button type="button" class="add-sw" id="add-c" aria-label="add colour">+</button>' : ''}</div></div>
        <div class="two"><div class="fld"><label>${t('f.fontAr')}</label><select data-font="fontAr">${OPT.fontAr.map(f => `<option ${f === d.fontAr ? 'selected' : ''} style="font-family:'${f}'">${f}</option>`).join('')}</select></div>
          <div class="fld"><label>${t('f.fontEn')}</label><select data-font="fontEn">${OPT.fontEn.map(f => `<option ${f === d.fontEn ? 'selected' : ''}>${f}</option>`).join('')}</select></div></div>
        <div class="fld">${lbl('f.photo')}${pickBtns(OPT.photo, d.photo, 'photo', 3)}</div>`,
    4: `<div class="fld" style="gap:var(--s4)">
          <div class="dial2"><span>${t('d.formal')}</span><input type="range" min="0" max="100" data-n="formal" value="${d.formal}"><span>${t('d.casual')}</span></div>
          <div class="dial2"><span>${t('d.serious')}</span><input type="range" min="0" max="100" data-n="playful" value="${d.playful}"><span>${t('d.playful')}</span></div>
          <div class="dial2"><span>${t('d.distant')}</span><input type="range" min="0" max="100" data-n="warm" value="${d.warm}"><span>${t('d.warm')}</span></div></div>
        <div class="fld"><label>${t('f.dialect')}</label><select data-dialect>${OPT.dialect.map(o => { const [v, en, ar] = o.split('|'); return `<option value="${v}" ${v === d.dialect ? 'selected' : ''}>${S.lang === 'ar' ? ar : en}</option>`; }).join('')}</select></div>
        <div class="fld"><label>${t('f.use')}</label>${tags('use', '')}</div>
        <div class="fld"><label>${t('f.avoid')}</label>${tags('avoid', 'no')}</div>`,
    5: `<div class="fld">${lbl('f.icp', 'f.icpH')}${ta('icp')}</div>
        <div class="fld">${lbl('f.vp', 'f.vpH', 'vp')}${ta('vp')}</div>
        <div class="fld"><label>${t('f.comp')}</label>${tags('comp', '')}</div>`,
  }[st];
  $('#wizard').innerHTML = `<div class="wiz"><div>
      <nav class="steps" aria-label="steps">${[1, 2, 3, 4, 5].map(i => `<button type="button" data-step="${i}" class="${i < st ? 'done' : ''}" ${i === st ? 'aria-current="step"' : ''}><span class="n">${i}</span>${t('w.' + i)}</button>`).join('')}</nav>
      <form class="wform" id="wform" onsubmit="return false"><h2>${t('w.' + st + 'h')}</h2><p class="lede">${t('w.' + st + 'p')}</p>${body}
        <div class="wnav"><button type="button" class="btn secondary" id="w-back">${t(st === 1 ? 'w.cancel' : 'w.back')}</button>
          <button type="button" class="btn primary" id="w-next" ${st === 1 && !d.name.trim() ? 'disabled' : ''}>${t(st === 5 ? 'w.save' : 'w.next')}</button></div></form>
    </div><aside class="preview" id="w-pv" aria-live="polite"></aside></div>`;
  renderPreview(); wireWizard();
}
function renderPreview() {
  const d = S.draft;
  $('#w-pv').innerHTML = `<span class="eyebrow">${t('pv.h')}</span>
    <div class="bn">${logoTile(d)}<div><b>${esc(d.name || t('pv.noname'))}</b><span>${tx(OPT.industry[d.industry])} · ${tx(OPT.city[d.city])}</span></div></div>
    <div class="dots">${d.colors.map(c => `<i style="background:${c};width:28px;height:28px;border-radius:9px"></i>`).join('')}</div>
    <div class="fonts"><span style="font-family:'${d.fontAr}'" lang="ar">أبجد</span><span style="font-family:'${d.fontEn}'">Aa Bb</span></div>
    ${d.purpose ? `<div class="sec"><span class="eyebrow">${t('f.purpose')}</span><span style="font-size:var(--t-sm)" dir="auto">${esc(d.purpose)}</span></div>` : ''}
    ${d.values.length || d.arch.length ? `<div class="vals">${d.values.map(i => `<span>${esc(tx(OPT.values[i]))}</span>`).join('')}${d.arch.map(i => `<span style="background:var(--tint-act)">${esc(tx(OPT.arch[i][0]))}</span>`).join('')}</div>` : ''}
    <div class="sec"><span class="eyebrow">${t('pv.sample')}</span>${voiceBubble(d)}</div>
    <svg class="helix" id="pv-hx" style="width:100%;height:28px"></svg>`;
  helix($('#pv-hx'), 320, 28, false);
}
function wireWizard() {
  const w = $('#wizard'), d = S.draft, rerenderPv = () => renderPreview();
  w.querySelectorAll('[data-f]').forEach(el => el.addEventListener('input', () => {
    const k = el.dataset.f; d[k] = el.tagName === 'SELECT' ? +el.value : el.value; delete d['_s_' + k];
    if (k === 'name') $('#w-next').disabled = !d.name.trim();
    rerenderPv();
  }));
  w.querySelectorAll('[data-font]').forEach(el => el.addEventListener('change', () => { d[el.dataset.font] = el.value; rerenderPv(); }));
  w.querySelectorAll('[data-n]').forEach(el => el.addEventListener('input', () => { d[el.dataset.n] = +el.value; rerenderPv(); }));
  const dl = w.querySelector('[data-dialect]'); dl && dl.addEventListener('change', () => { d.dialect = dl.value; rerenderPv(); });
  w.querySelectorAll('[data-lang-pick]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.langPick; d.langs[k] = !d.langs[k]; if (!d.langs.ar && !d.langs.en) d.langs[k] = true; renderWizard(); }));
  w.querySelectorAll('.pick[data-key]').forEach(p => p.addEventListener('click', e => {
    const b = e.target.closest('[data-i]'); if (!b) return; const key = p.dataset.key, max = +p.dataset.max, i = +b.dataset.i, arr = d[key];
    const at = arr.indexOf(i); if (at >= 0) arr.splice(at, 1); else { if (arr.length >= max) arr.shift(); arr.push(i); }
    p.querySelectorAll('[data-i]').forEach(x => x.setAttribute('aria-pressed', arr.includes(+x.dataset.i))); rerenderPv();
  }));
  w.querySelectorAll('[data-sug]').forEach(b => b.addEventListener('click', () => { const k = b.dataset.sug; d[k] = suggest(k); d['_s_' + k] = 1; renderWizard(); }));
  w.querySelectorAll('[data-color]').forEach(el => el.addEventListener('input', () => { d.colors[+el.dataset.color] = el.value; el.nextElementSibling.textContent = el.value.toUpperCase(); rerenderPv(); }));
  w.querySelectorAll('[data-rmc]').forEach(b => b.addEventListener('click', () => { d.colors.splice(+b.dataset.rmc, 1); renderWizard(); }));
  const ac = $('#add-c'); ac && ac.addEventListener('click', () => { d.colors.push('#888888'); renderWizard(); });
  const lf = $('#f-logo'); lf && lf.addEventListener('change', () => { const f = lf.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { d.logo = r.result; renderWizard(); }; r.readAsDataURL(f); });
  w.querySelectorAll('[data-tags]').forEach(box => {
    const key = box.dataset.tags, inp = box.querySelector('input');
    inp.addEventListener('keydown', e => { if (e.key === 'Enter' && inp.value.trim()) { e.preventDefault(); d[key].push(inp.value.trim()); renderWizard(); w.querySelector(`[data-tags="${key}"] input`).focus(); } });
    box.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => { d[key].splice(+b.dataset.rm, 1); renderWizard(); }));
  });
  const sm = $('#w-sample'); sm && sm.addEventListener('click', () => { S.draft = Object.assign(blank(), JSON.parse(JSON.stringify(SAMPLE[S.lang]))); renderWizard(); });
  w.querySelectorAll('[data-step]').forEach(b => b.addEventListener('click', () => { if (!d.name.trim()) return; S.wstep = +b.dataset.step; renderWizard(); $('#wizard').scrollTop = 0; }));
  $('#w-back').addEventListener('click', () => { if (S.wstep === 1) { go('brand'); return; } S.wstep--; renderWizard(); $('#wizard').scrollTop = 0; });
  $('#w-next').addEventListener('click', () => {
    if (S.wstep < 5) { S.wstep++; renderWizard(); $('#wizard').scrollTop = 0; return; }
    Object.keys(d).filter(k => k.startsWith('_s_')).forEach(k => delete d[k]);
    S.dna = d; S.draft = null; go('brand'); toast(t('dna.saved'));
  });
}

/* ---------------------------------------------------------------- hook into the app */
window.renderGrowth = function () {
  const mkOn = NAV_MK.includes(S.screen);
  const mn = $('#mk-nav'); if (mn) mn.setAttribute('aria-current', mkOn ? 'page' : 'false');
  const bn = document.querySelector('[data-go="brand"]'); if (bn) bn.setAttribute('aria-current', S.screen === 'brand' || S.screen === 'wizard' ? 'page' : 'false');
  if (S.screen === 'service') $('#title').textContent = tx(SVC[S.svc].n);
  if (S.screen === 'campaigns') $('#title').textContent = tx(SVC.messaging.n);
  if (S.screen === 'marketing') renderMarketing();
  if (S.screen === 'service') renderService();
  if (S.screen === 'brand') renderBrand();
  if (S.screen === 'wizard') renderWizard();
  if ($('#mk-menu') && $('#mk-menu').classList.contains('on')) renderMenu();
};
/* ---------------------------------------------------------------- session from auth.html (prototype: sessionStorage only) */
function session() {
  let u = null; try { u = JSON.parse(sessionStorage.getItem('hx-user') || 'null'); } catch (e) {}
  const av = document.querySelector('.avatar'), a = document.createElement('a');
  a.className = 'avatar'; a.href = './'; a.title = 'Sign out'; a.setAttribute('aria-label', 'Sign out'); a.style.textDecoration = 'none';
  a.textContent = u && u.name ? u.name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') : 'AN';
  av.replaceWith(a);
  if (!u) return;
  if (u.company) { T.en.tenant = `${u.company} · sample data`; T.ar.tenant = `${u.company} · بيانات تجريبية`; }
  if (u.theme === 'light') document.querySelector('[data-theme-set="light"]').click();
  if (u.lang === 'ar') document.querySelector('[data-lang="ar"]').click();
  if (location.hash === '#onboard') {
    history.replaceState(null, '', location.pathname);
    startWizard(); if (u.company) { S.draft.name = u.company; renderWizard(); }
  }
}
window.startWizard = startWizard;
setupRail();
renderAll();
session();
renderAll();
})();
