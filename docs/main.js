// ============================================================
// 碩思有限公司 — Source Insight Co. Ltd.
// Multilingual one-page site · zh / en / ja
// ============================================================

// ---------- Translation table ----------
const i18n = {
  zh: {
    // Nav
    'nav.about':     '關於我們',
    'nav.services':  '服務項目',
    'nav.strengths': '核心優勢',
    'nav.contact':   '聯絡我們',

    // Hero
    'hero.tagline':  '專業顧問服務',
    'hero.subtitle': '跨越邊界・連結未來',
    'hero.desc':     '深耕台日產業合作・國防戰略諮詢<br>以專業知識，為您的決策提供最堅實的後盾',
    'hero.cta1':     '了解服務',
    'hero.cta2':     '立即諮詢',
    'hero.scroll':   '向下探索',

    // About
    'about.label': 'About Us',
    'about.title': '關於碩思',
    'about.p1':    '碩思有限公司是一家以<strong>策略顧問</strong>為核心的專業服務機構，致力於協助企業與機構在複雜的商業及政策環境中做出精準決策。',
    'about.p2':    '我們的團隊橫跨台灣與日本，深刻理解兩地的商業文化、法規脈絡與產業生態，並在<strong>國防產業</strong>領域累積了豐富的實務經驗與政策洞察。',
    'about.p3':    '「碩思」二字，取自深謀遠慮之意——我們相信，真正的顧問價值在於超越資訊傳遞，提供能夠改變決策格局的深層洞見。',
    'about.stat1': '台日雙邊服務',
    'about.stat2': '國防產業專業',
    'about.stat3': '企業媒合平台',
    'about.stat4': '策略顧問諮詢',

    // Services
    'services.label': 'Our Services',
    'services.title': '服務項目',
    'svc1.title': '台日企業媒合',
    'svc1.desc':  '協助台灣與日本企業建立穩固的商業夥伴關係。從市場調查、對象評估，到商務談判全程陪同，打通兩地合作的每一個關鍵環節。',
    'svc1.li1': '潛在夥伴企業調查與評估',
    'svc1.li2': '商務訪日 / 訪台行程規劃',
    'svc1.li3': '跨文化談判支援與口譯協助',
    'svc1.li4': '合作協議草擬與法律對接',
    'svc2.title': '國防產業諮詢',
    'svc2.desc':  '提供國防及雙用途（Dual-use）產業的政策分析、市場進入策略及供應鏈整合建議，協助企業在高度敏感且受管制的領域中合規發展。',
    'svc2.li1': '國防採購政策解析',
    'svc2.li2': '國內外法規合規諮詢',
    'svc2.li3': '供應商資格認定輔導',
    'svc2.li4': '技術移轉與合作框架建立',
    'svc3.title': '市場進入策略',
    'svc3.desc':  '針對有意拓展台灣或日本市場的企業，提供客製化的市場分析報告、競爭態勢評估與進入策略規劃，降低跨境擴張的不確定性。',
    'svc3.li1': '目標市場可行性研究',
    'svc3.li2': '競爭對手情報分析',
    'svc3.li3': '商業模式在地化建議',
    'svc3.li4': '關鍵利害關係人引薦',

    // Strengths
    'strengths.label': 'Why Choose Us',
    'strengths.title': '核心優勢',
    'str1.title': '深厚的雙邊網絡',
    'str1.desc':  '在台灣與日本均建立了跨政府、產業與學術界的廣泛人脈，能夠快速連結關鍵決策者。',
    'str2.title': '語言與文化雙精通',
    'str2.desc':  '團隊成員具備中文、日文及英文的專業溝通能力，能消弭語言障礙，避免文化誤解。',
    'str3.title': '國防領域專業背景',
    'str3.desc':  '具有軍事、國防政策及相關產業的第一線實務背景，提供他人難以複製的深度洞察。',
    'str4.title': '高度客製化服務',
    'str4.desc':  '拒絕一體適用的解決方案，每份顧問報告與策略建議均針對客戶的具體情境量身打造。',
    'str5.title': '嚴謹的保密承諾',
    'str5.desc':  '所有業務往來均簽署保密協議（NDA），確保客戶的商業機密與敏感資訊受到最高規格保護。',
    'str6.title': '端到端全程陪伴',
    'str6.desc':  '從初期評估、洽談斡旋到合作落地，全程提供支援，確保每個合作案都能順利推進。',

    // Contact
    'contact.label':       'Get In Touch',
    'contact.title':       '聯絡我們',
    'contact.intro':       '歡迎透過以下方式與我們取得聯繫，我們將在兩個工作日內回覆您的詢問。',
    'contact.addr.label':  '公司地址',
    'contact.addr.value':  '新北市板橋區漢生東路141號3樓',
    'contact.email.label': '電子信箱',
    'contact.tel.label':   '聯絡電話',
    'contact.lang.label':  '服務語言',

    // Form
    'form.name.label':         '姓名',
    'form.name.placeholder':   '您的姓名',
    'form.company.label':      '公司名稱',
    'form.company.placeholder':'您的公司',
    'form.email.label':        '電子信箱',
    'form.service.label':      '諮詢項目',
    'form.service.placeholder':'請選擇服務項目',
    'form.service.opt1':       '台日企業媒合',
    'form.service.opt2':       '國防產業諮詢',
    'form.service.opt3':       '市場進入策略',
    'form.service.opt4':       '其他',
    'form.message.label':      '諮詢內容',
    'form.message.placeholder':'請簡述您的需求或問題…',
    'form.submit':             '送出詢問',
    'form.note':               '* 送出後我們將在兩個工作日內與您聯繫',

    // Footer
    'footer.tagline': '專業顧問服務 · 台日企業媒合 · 國防產業諮詢',
  },

  en: {
    // Nav
    'nav.about':     'About Us',
    'nav.services':  'Services',
    'nav.strengths': 'Our Strengths',
    'nav.contact':   'Contact',

    // Hero
    'hero.tagline':  'Professional Consulting Services',
    'hero.subtitle': 'Beyond Borders · Connecting Futures',
    'hero.desc':     'Specializing in Taiwan-Japan industry collaboration & defense strategy consulting.<br>We provide the insight your decisions deserve.',
    'hero.cta1':     'Explore Services',
    'hero.cta2':     'Contact Us',
    'hero.scroll':   'Scroll Down',

    // About
    'about.label': 'About Us',
    'about.title': 'About Source Insight',
    'about.p1':    'Source Insight Co. Ltd. is a professional <strong>strategic consulting</strong> firm dedicated to helping businesses and organizations make precise decisions in complex commercial and policy environments.',
    'about.p2':    'Our team spans Taiwan and Japan, with a deep understanding of the business culture, regulatory landscape, and industrial ecosystems of both countries — alongside extensive expertise in the <strong>defense industry</strong>.',
    'about.p3':    'The name "Source Insight" embodies our belief that true consulting value lies beyond information delivery — it is about providing the deep intelligence that reshapes decision-making.',
    'about.stat1': 'Taiwan-Japan Services',
    'about.stat2': 'Defense Industry Expertise',
    'about.stat3': 'Business Matching',
    'about.stat4': 'Strategic Consulting',

    // Services
    'services.label': 'Our Services',
    'services.title': 'Services',
    'svc1.title': 'Taiwan-Japan Business Matching',
    'svc1.desc':  'We help Taiwanese and Japanese companies build lasting commercial partnerships — from market research and partner assessment to full accompaniment through business negotiations.',
    'svc1.li1': 'Potential partner identification & evaluation',
    'svc1.li2': 'Business trip planning (Japan / Taiwan)',
    'svc1.li3': 'Cross-cultural negotiation support & interpretation',
    'svc1.li4': 'Drafting cooperation agreements & legal liaison',
    'svc2.title': 'Defense Industry Consulting',
    'svc2.desc':  'We provide policy analysis, market-entry strategies, and supply-chain integration guidance for the defense and dual-use sectors, helping clients develop compliantly in highly regulated environments.',
    'svc2.li1': 'Defense procurement policy analysis',
    'svc2.li2': 'Domestic & international regulatory compliance',
    'svc2.li3': 'Supplier qualification & accreditation guidance',
    'svc2.li4': 'Technology transfer & cooperation framework setup',
    'svc3.title': 'Market Entry Strategy',
    'svc3.desc':  'For businesses planning to enter the Taiwanese or Japanese market, we deliver customized market analysis, competitive landscape assessments, and entry strategies to reduce uncertainty.',
    'svc3.li1': 'Target market feasibility studies',
    'svc3.li2': 'Competitor intelligence analysis',
    'svc3.li3': 'Business model localization recommendations',
    'svc3.li4': 'Introduction to key stakeholders',

    // Strengths
    'strengths.label': 'Why Choose Us',
    'strengths.title': 'Our Strengths',
    'str1.title': 'Deep Bilateral Networks',
    'str1.desc':  'We maintain extensive cross-sector networks spanning government, industry, and academia in both Taiwan and Japan, enabling rapid access to key decision-makers.',
    'str2.title': 'Trilingual Cultural Fluency',
    'str2.desc':  'Our team communicates professionally in Chinese, Japanese, and English — eliminating language barriers and preventing costly cultural misunderstandings.',
    'str3.title': 'Defense Domain Expertise',
    'str3.desc':  'Our frontline background in military affairs, defense policy, and related industries provides insights that are genuinely difficult to replicate.',
    'str4.title': 'Fully Customized Engagements',
    'str4.desc':  'We reject one-size-fits-all solutions. Every advisory report and strategic recommendation is tailored to the client\'s specific context.',
    'str5.title': 'Rigorous Confidentiality',
    'str5.desc':  'All engagements are covered by NDAs. Client trade secrets and sensitive information receive the highest level of protection.',
    'str6.title': 'End-to-End Partnership',
    'str6.desc':  'From initial assessment and negotiation to deal closure, we provide continuous support to ensure every engagement advances smoothly.',

    // Contact
    'contact.label':       'Get In Touch',
    'contact.title':       'Contact Us',
    'contact.intro':       'Please reach out through the channels below. We will respond within two business days.',
    'contact.addr.label':  'Address',
    'contact.addr.value':  '3F, No.141, Hansheng E. Rd., Banqiao Dist., New Taipei City, Taiwan',
    'contact.email.label': 'Email',
    'contact.tel.label':   'Phone',
    'contact.lang.label':  'Service Languages',

    // Form
    'form.name.label':         'Name',
    'form.name.placeholder':   'Your name',
    'form.company.label':      'Company',
    'form.company.placeholder':'Your company',
    'form.email.label':        'Email',
    'form.service.label':      'Service of Interest',
    'form.service.placeholder':'Please select a service',
    'form.service.opt1':       'Taiwan-Japan Business Matching',
    'form.service.opt2':       'Defense Industry Consulting',
    'form.service.opt3':       'Market Entry Strategy',
    'form.service.opt4':       'Other',
    'form.message.label':      'Message',
    'form.message.placeholder':'Please briefly describe your inquiry…',
    'form.submit':             'Send Inquiry',
    'form.note':               '* We will respond within two business days.',

    // Footer
    'footer.tagline': 'Strategic Consulting · Taiwan-Japan Business Matching · Defense Industry Advisory',
  },

  ja: {
    // Nav
    'nav.about':     '私たちについて',
    'nav.services':  'サービス',
    'nav.strengths': '強み',
    'nav.contact':   'お問い合わせ',

    // Hero
    'hero.tagline':  'プロフェッショナル・コンサルティング',
    'hero.subtitle': '国境を越え、未来を繋ぐ',
    'hero.desc':     '台日産業連携・防衛戦略コンサルティングを専門とし、<br>お客様の意思決定に最も確かな洞察をご提供します。',
    'hero.cta1':     'サービスを見る',
    'hero.cta2':     'お問い合わせ',
    'hero.scroll':   '下へスクロール',

    // About
    'about.label': 'About Us',
    'about.title': 'Source Insightについて',
    'about.p1':    'Source Insight Co. Ltd.（碩思有限公司）は、複雑なビジネス・政策環境における精密な意思決定を支援する、<strong>戦略コンサルティング</strong>専門企業です。',
    'about.p2':    '台湾と日本に跨るチームが、両国のビジネス文化・法規制・産業エコシステムを深く理解し、<strong>防衛産業</strong>分野においても豊富な実務経験と政策的洞察を蓄積しています。',
    'about.p3':    '「Source Insight」という名称には、真のコンサルティング価値とは情報伝達を超え、意思決定の枠組みそのものを変える深層の洞察を提供することにあるという信念が込められています。',
    'about.stat1': '台日バイラテラルサービス',
    'about.stat2': '防衛産業の専門性',
    'about.stat3': 'ビジネスマッチング',
    'about.stat4': '戦略コンサルティング',

    // Services
    'services.label': 'Our Services',
    'services.title': 'サービス内容',
    'svc1.title': '台日ビジネスマッチング',
    'svc1.desc':  '台湾と日本の企業が安定したパートナーシップを構築できるよう、市場調査・候補先評価から商談の全面サポートまでをトータルにご支援します。',
    'svc1.li1': '潜在パートナー企業の調査・評価',
    'svc1.li2': '訪日・訪台ビジネス渡航の企画',
    'svc1.li3': '異文化交渉支援・通訳同行',
    'svc1.li4': '協力協定の草案作成・法務連携',
    'svc2.title': '防衛産業コンサルティング',
    'svc2.desc':  '防衛・デュアルユース産業を対象に、政策分析・市場参入戦略・サプライチェーン統合のアドバイスを提供し、高度に規制された領域でのコンプライアントな成長を支援します。',
    'svc2.li1': '防衛調達政策の解析',
    'svc2.li2': '国内外の法規制コンプライアンス支援',
    'svc2.li3': 'サプライヤー認定取得のサポート',
    'svc2.li4': '技術移転・協力フレームワークの構築',
    'svc3.title': '市場参入戦略',
    'svc3.desc':  '台湾・日本市場への参入を検討する企業向けに、カスタマイズされた市場分析レポート・競合評価・参入戦略を提供し、越境展開のリスクを低減します。',
    'svc3.li1': 'ターゲット市場のフィージビリティスタディ',
    'svc3.li2': '競合他社インテリジェンス分析',
    'svc3.li3': 'ビジネスモデルのローカライズ提案',
    'svc3.li4': 'キーステークホルダーへの紹介',

    // Strengths
    'strengths.label': 'Why Choose Us',
    'strengths.title': '私たちの強み',
    'str1.title': '深い二国間ネットワーク',
    'str1.desc':  '台湾・日本の政府・産業界・学術界にわたる幅広い人脈を持ち、主要な意思決定者への迅速なアクセスが可能です。',
    'str2.title': '三カ国語対応と文化理解',
    'str2.desc':  'チームメンバーは中国語・日本語・英語のいずれも専門レベルで対応でき、言語の壁と文化的誤解を防ぎます。',
    'str3.title': '防衛分野の専門的バックグラウンド',
    'str3.desc':  '軍事・防衛政策および関連産業の最前線での実務経験を持ち、他では得難い深い洞察を提供します。',
    'str4.title': '高度なカスタマイズ対応',
    'str4.desc':  '画一的なソリューションは提供しません。すべてのアドバイザリーレポートと戦略提案は、クライアントの状況に合わせてオーダーメイドします。',
    'str5.title': '厳格な機密保持',
    'str5.desc':  'すべての業務は秘密保持契約（NDA）に基づいており、お客様の営業秘密と機密情報を最高水準で保護します。',
    'str6.title': 'エンドツーエンドのサポート',
    'str6.desc':  '初期評価から交渉・合意形成まで、案件が円滑に進展するよう全工程を継続的にサポートします。',

    // Contact
    'contact.label':       'Get In Touch',
    'contact.title':       'お問い合わせ',
    'contact.intro':       '以下の方法でお気軽にご連絡ください。2営業日以内にご返答いたします。',
    'contact.addr.label':  '所在地',
    'contact.addr.value':  '台湾 新北市板橋区漢生東路141号3階',
    'contact.email.label': 'メールアドレス',
    'contact.tel.label':   '電話番号',
    'contact.lang.label':  '対応言語',

    // Form
    'form.name.label':         'お名前',
    'form.name.placeholder':   'お名前をご記入ください',
    'form.company.label':      '会社名',
    'form.company.placeholder':'会社名をご記入ください',
    'form.email.label':        'メールアドレス',
    'form.service.label':      'ご相談内容',
    'form.service.placeholder':'サービスを選択してください',
    'form.service.opt1':       '台日ビジネスマッチング',
    'form.service.opt2':       '防衛産業コンサルティング',
    'form.service.opt3':       '市場参入戦略',
    'form.service.opt4':       'その他',
    'form.message.label':      'メッセージ',
    'form.message.placeholder':'ご要望やご質問を簡単にご記入ください…',
    'form.submit':             'お問い合わせを送信',
    'form.note':               '* 送信後、2営業日以内にご連絡いたします。',

    // Footer
    'footer.tagline': '戦略コンサルティング · 台日ビジネスマッチング · 防衛産業アドバイザリー',
  },
};

// ---------- Apply language ----------
let currentLang = 'zh';

function applyLanguage(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  // text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML (for bold tags etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // <option> text nodes (select options)
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // html lang attribute + font class
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : lang;
  document.documentElement.setAttribute('data-lang', lang);

  // active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // reset select to first option
  const sel = document.getElementById('service');
  if (sel) sel.selectedIndex = 0;

  // persist choice
  try { localStorage.setItem('si-lang', lang); } catch (_) {}
}

// ---------- Navbar scroll effect ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  navToggle.setAttribute('aria-label', isOpen ? '關閉選單' : '開啟選單');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---------- Language switcher ----------
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// ---------- Scroll-triggered animations ----------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function initAnimations() {
  const selectors = [
    '.about-text', '.about-stats',
    '.service-card',
    '.strength-item',
    '.contact-info', '.contact-form',
    '.section-header',
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fade-up');
      if (i === 1) el.classList.add('fade-up-delay-1');
      if (i === 2) el.classList.add('fade-up-delay-2');
      if (i === 3) el.classList.add('fade-up-delay-3');
      observer.observe(el);
    });
  });
}

// ---------- Active nav highlight ----------
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

// ---------- Contact form ----------
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');

  const submitMessages = { zh: '傳送中…',              en: 'Sending…',       ja: '送信中…' };
  const doneMessages   = { zh: '✓ 已成功送出，謝謝您！', en: '✓ Sent! Thank you.', ja: '✓ 送信完了しました。' };
  const errorMessages  = { zh: '✗ 傳送失敗，請稍後再試', en: '✗ Failed. Please try again.', ja: '✗ 送信失敗。もう一度お試しください。' };

  btn.textContent = submitMessages[currentLang] || submitMessages.zh;
  btn.disabled = true;

  const payload = {
    name:    document.getElementById('name').value.trim(),
    company: document.getElementById('company').value.trim(),
    email:   document.getElementById('email').value.trim(),
    service: document.getElementById('service').value,
    message: document.getElementById('message').value.trim(),
  };

  try {
    const res = await fetch('https://formspree.io/f/meepbrzq', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body:    JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Server error');

    btn.textContent = doneMessages[currentLang] || doneMessages.zh;
    btn.style.background = '#2d6a4f';
    btn.style.color = '#fff';
    contactForm.reset();

    setTimeout(() => {
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      applyLanguage(currentLang);
    }, 4000);

  } catch (_) {
    btn.textContent = errorMessages[currentLang] || errorMessages.zh;
    btn.style.background = '#b00020';
    btn.style.color = '#fff';

    setTimeout(() => {
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
      applyLanguage(currentLang);
    }, 4000);
  }
});

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language or detect browser preference
  let savedLang = 'zh';
  try { savedLang = localStorage.getItem('si-lang') || 'zh'; } catch (_) {}
  if (!i18n[savedLang]) savedLang = 'zh';

  applyLanguage(savedLang);
  initAnimations();
  updateActiveNav();
});
