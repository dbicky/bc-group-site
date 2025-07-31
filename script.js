/* Script to handle language switching and dynamic text translation */

const translations = {
  en: {
    navAbout: 'About',
    aboutTitle: 'About Us',
    aboutText1: 'With over 15 years of combined real estate experience spanning Israel, Los Angeles, New York and Miami, our team brings global perspective to local renewal. We specialize in transforming aging apartments into modern, high‑value homes.',
    aboutText2: 'We are more than renovators – we’re your partner. By co‑investing in CapEx and sharing profits, we align our interests with yours. Our in‑house brokerage ensures seamless marketing and sale of your upgraded apartment, maximizing returns for both parties.',
    modelTitle: 'Our Model',
    model1Title: 'CapEx Partnership',
    model1Desc: 'We invest alongside you to fund renovations, splitting capital expenditures and aligning incentives.',
    model2Title: 'Profit Sharing',
    model2Desc: 'After the sale, we divide the profits fairly, ensuring both parties benefit from the improved value.',
    model3Title: 'Full‑Service Brokerage',
    model3Desc: 'Our licensed brokerage lists and sells the renovated apartment, handling marketing, negotiations and closing.',
    logo: 'BC Group',
    title: 'BC Group – Real Estate Renovation & Brokerage',
    navHome: 'Home',
    navProcess: 'Process',
    navValue: 'Value',
    navMarket: 'Market',
    navPortfolio: 'Portfolio',
    navFounders: 'Founders',
    navFaq: 'FAQ',
    navWork: 'Work With Us',
    // Updated hero section copy
    heroTitle: 'Turn your old apartment into a high‑value, premium listing in 6 months — without lifting a finger.',
    heroSubtitle: 'Modernizing Tel Aviv’s aging apartments for maximum return.',
    heroBullet1: 'We split renovation costs with you',
    heroBullet2: 'We manage the entire process',
    heroBullet3: 'We sell your apartment through our brokerage',
    ctaPrimary: 'Get a Free Property Assessment',
    ctaSticky: 'Book a Free Assessment',
    processTitle: 'Our Process',
    step1Title: 'Property Assessment',
    step1Desc: 'We evaluate your apartment’s condition, neighborhood trends and potential resale value.',
    step2Title: 'CapEx Agreement',
    step2Desc: 'We draft a co‑investment agreement outlining the split of renovation costs and profit share.',
    step3Title: 'Design & Renovation',
    step3Desc: 'Our team manages design, permits and construction over 4–6 months to unlock premium value.',
    step4Title: 'Sale & Brokerage',
    step4Desc: 'We list your upgraded apartment through our exclusive brokerage, marketing to qualified buyers.',
    step5Title: 'Profit Split & Payout',
    step5Desc: 'After closing, we distribute profits according to our agreement and celebrate your success.',
    portfolioTitle: 'Portfolio',
    beforeCaption: 'Before',
    afterCaption: 'After',
    workTitle: 'Work With Us',
    workDesc: 'Interested in unlocking your apartment’s potential? Fill out the form below and we’ll get back to you.',
    marketTitle: 'Market Insights',
    // Updated market statistics for 2025
    stat1Number: '6,254',
    stat1Text: 'apartments were sold across Israel in April 2025 – the lowest April in 24 years. New apartment sales fell 28% and second‑hand sales dropped 5%.',
    stat2Number: '11.2%↑',
    stat2Text: 'Tel Aviv property prices jumped 11.2% year‑over‑year in Q1 2025, with the average home price reaching ₪4.82 M and ₪59.2K per square meter.',
    stat3Number: '3.9%↑',
    stat3Text: 'Nationwide home prices in April–May 2025 remained 3.9% higher than a year earlier, even after three months of modest declines.',
    stat4Number: '0.3%↓',
    stat4Text: 'Housing prices fell 0.3% during April–May 2025, marking the third straight monthly decline, while new‑home prices were still up 5.3% year‑over‑year.',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formCity: 'City',
    formMessage: 'Tell us about your apartment',
    formSubmit: 'Submit',
    footerText: 'All rights reserved.',
    faqTitle: 'FAQs – BC Group',
    faqHeader: 'Frequently Asked Questions',
    faq1Q: 'What is your business model?',
    faq1A: 'We partner with apartment owners to co‑invest in renovations and manage the sale through our brokerage. Profits are shared after repayment of renovation costs.',
    faq2Q: 'Do I need to pay anything upfront?',
    faq2A: 'No. We fund the renovation. Our investment is recouped when the apartment is sold, and we split the remaining profit.',
    faq3Q: 'How long does the process take?',
    faq3A: 'A typical renovation and sale cycle takes three to six months, depending on the scope of work and market conditions.',
    faq4Q: 'Who handles permits and design?',
    faq4A: 'Our in‑house team secures permits, plans the design and manages construction. You can be as involved as you wish without any administrative burden.',
    faq5Q: 'Do I have to use your brokerage to sell?',
    faq5A: 'Yes. Our full‑service model includes listing the renovated apartment through our licensed brokerage to ensure a smooth sale and maximize returns.',

    // Value proposition section (single column)
    valueTitle: 'Unlock Hidden Value',
    valueDesc: 'Transform your outdated central‑Israel apartment into a premium listing worth ₪80k–₪90k/m² – through a partnership that splits renovation costs (CapEx), handles the full redesign, and guarantees resale via our in‑house brokerage. Our projects typically deliver a 15–30% uplift in value.',
    valueQuote: '"We never imagined our old apartment could be worth so much. The team handled everything and the sale price exceeded our expectations." – Happy Client',

    // Founders section
    foundersTitle: 'Our Founders',
    founder1Name: 'Idan Cohen',
    founder1Role: 'Co‑Founder & CEO',
    founder1Desc: 'Idan has over a decade of experience in Israeli and U.S. real estate markets, leading acquisitions and redevelopment projects across Tel Aviv, Los Angeles and New York.',
    founder2Name: 'Dov Bicky',
    founder2Role: 'Co‑Founder & Head of Design',
    founder2Desc: 'Dov blends architectural vision with hands‑on construction management. He has delivered bespoke renovations in Miami, Jerusalem and beyond.',

    // ROI section translations
    roiTitle: 'How Much More Could Your Apartment Be Worth?',
    roiStat1Number: '₪59,200/m²',
    roiStat1Text: 'Tel Aviv average',
    roiStat2Number: '₪90,000/m²',
    roiStat2Text: 'Neve Tzedek',
    roiStat3Number: '₪82,000/m²',
    roiStat3Text: 'Rothschild',
    roiStat4Number: '₪75,000/m²',
    roiStat4Text: 'Florentin',
    roiStat5Number: '15–30%',
    roiStat5Text: 'Typical uplift',
    roiCalcTitle: 'ROI Calculator',
    roiSize: 'Apartment Size (m²)',
    roiCurrent: 'Current Value (₪)',
    roiCapex: 'CapEx Estimate (₪)',
    roiCalcButton: 'Calculate',
    roiResSale: 'Projected Resale Value',
    roiResProfit: 'Projected Profit',
  },
  he: {
    logo: 'BC Group',
    title: 'BC Group – פיתוח ושיפוץ נכסים',
    navAbout: 'אודות',
    aboutTitle: 'אודותינו',
    aboutText1: 'עם יותר מ-15 שנות ניסיון מצטבר בנדל"ן בישראל, לוס אנג׳לס, ניו יורק ומיאמי, אנו מביאים פרספקטיבה גלובלית להתחדשות מקומית. אנו מתמחים בהפיכת דירות ישנות לבתים מודרניים בעלי ערך גבוה.',
    aboutText2: 'אנחנו יותר משפצים – אנחנו השותפים שלכם. על ידי השקעה משותפת בעלויות השיפוץ וחלוקת רווחים אנו מיישרים את האינטרסים שלנו עם שלכם. משרד התיווך שלנו מבטיח שיווק ומכירה חלקה של הדירה המשודרגת, להשגת תשואה מירבית לשני הצדדים.',
    modelTitle: 'המודל שלנו',
    model1Title: 'שותפות בהון',
    model1Desc: 'אנחנו משקיעים לצדכם במימון השיפוץ, מתחלקים בעלויות ומיישרים אינטרסים.',
    model2Title: 'חלוקת רווחים',
    model2Desc: 'לאחר המכירה אנו מחלקים את הרווחים באופן הוגן כך ששני הצדדים ייהנו מהשבחת ערך הנכס.',
    model3Title: 'תיווך מלא',
    model3Desc: 'משרד התיווך המורשה שלנו מפרסם ומוכר את הדירה המשופצת, מטפל בשיווק, במשא ומתן ובסגירה.',
    navHome: 'בית',
    navProcess: 'תהליך',
    navValue: 'ערך',
    navMarket: 'שוק',
    navPortfolio: 'תיק עבודות',
    navFounders: 'מייסדים',
    navFaq: 'שאלות נפוצות',
    navWork: 'עבדו איתנו',
    // Updated hero section copy (Hebrew)
    heroTitle: 'הפכו את הדירה הישנה שלכם לנכס פרימיום בעל ערך גבוה בתוך 6 חודשים – בלי מאמץ מצידכם.',
    heroSubtitle: 'מחדשים דירות ישנות בתל אביב להשבחת ערך מקסימלית.',
    heroBullet1: 'אנחנו מתחלקים בעלויות השיפוץ איתכם',
    heroBullet2: 'אנחנו מנהלים את כל התהליך',
    heroBullet3: 'אנחנו מוכרים את הדירה המשופצת דרך משרד התיווך שלנו',
    ctaPrimary: 'קבלו הערכת נכס בחינם',
    ctaSticky: 'הזמינו הערכה חינם',
    processTitle: 'התהליך שלנו',
    step1Title: 'הערכת נכס',
    step1Desc: 'אנחנו מעריכים את מצב הדירה, מגמות השכונה והשווי הפוטנציאלי.',
    step2Title: 'הסכם הון',
    step2Desc: 'ננסח הסכם השקעה משותפת המפרט את חלוקת עלויות השיפוץ והרווחים.',
    step3Title: 'עיצוב ושיפוץ',
    step3Desc: 'הצוות שלנו מנהל את העיצוב, ההיתרים והבנייה במשך 4–6 חודשים להשבחת הדירה.',
    step4Title: 'מכירה ותיווך',
    step4Desc: 'אנחנו משווקים את הדירה המשודרגת באמצעות משרד התיווך הבלעדי שלנו ומביאים קונים מתאימים.',
    step5Title: 'חלוקת רווחים ותשלום',
    step5Desc: 'לאחר הסגירה אנו מחלקים את הרווחים לפי ההסכם וחוגגים את ההצלחה.',
    portfolioTitle: 'תיק עבודות',
    beforeCaption: 'לפני',
    afterCaption: 'אחרי',
    workTitle: 'עבדו איתנו',
    workDesc: 'מעוניינים לחשוף את הפוטנציאל של הדירה שלכם? מלאו את הטופס ונחזור אליכם.',
    marketTitle: 'תובנות שוק',
    // Updated market statistics for 2025 (Hebrew)
    stat1Number: '6,254',
    stat1Text: 'דירות נמכרו ברחבי ישראל באפריל 2025 – חודש אפריל החלש ביותר מזה 24 שנים. מכירות הדירות החדשות ירדו ב‑28% ומכירות הדירות יד‑שנייה ב‑5%.',
    stat2Number: '11.2%↑',
    stat2Text: 'מחירי הדירות בתל אביב זינקו ב‑11.2% בהשוואה לשנה הקודמת ברבעון הראשון של 2025, עם מחיר ממוצע של 4.82 מ׳ ₪ ו‑59.2 אלף ₪ למ״ר.',
    stat3Number: '3.9%↑',
    stat3Text: 'מחירי הדיור הארציים באפריל–מאי 2025 נותרו גבוהים ב‑3.9% בהשוואה לשנה שעברה, על אף שלושה חודשי ירידות מתונות.',
    stat4Number: '0.3%↓',
    stat4Text: 'מחירי הדיור ירדו ב‑0.3% בתקופה אפריל–מאי 2025 – ירידה חודשית שלישית ברציפות – בעוד מחירי הדירות החדשות עדיין גבוהים ב‑5.3% משנה לשנה.',
    formName: 'שם',
    formEmail: 'אימייל',
    formPhone: 'טלפון',
    formCity: 'עיר',
    formMessage: 'ספרו לנו על הדירה שלכם',
    formSubmit: 'שלחו',
    footerText: 'כל הזכויות שמורות.',
    faqTitle: 'שאלות נפוצות – BC Group',
    faqHeader: 'שאלות נפוצות',
    faq1Q: 'מהו מודל העסק שלכם?',
    faq1A: 'אנחנו משתפים פעולה עם בעלי דירות להשקיע יחד בשיפוץ ומנהלים את המכירה דרך משרד התיווך שלנו. הרווחים מחולקים אחרי החזר עלויות השיפוץ.',
    faq2Q: 'האם עלי לשלם משהו מראש?',
    faq2A: 'לא. אנחנו מממנים את השיפוץ. ההשקעה שלנו מוחזרת בעת המכירה והרווח הנותר מחולק.',
    faq3Q: 'כמה זמן נמשך התהליך?',
    faq3A: 'מחזור שיפוץ ומכירה טיפוסי נמשך שלושה עד שישה חודשים, תלוי בהיקף העבודה ובתנאי השוק.',
    faq4Q: 'מי מטפל בהיתרים ובעיצוב?',
    faq4A: 'הצוות שלנו אחראי להשגת היתרים, לתכנון העיצוב ולניהול הבנייה. אתם יכולים להיות מעורבים ככל שתרצו ללא טרחה אדמיניסטרטיבית.',
    faq5Q: 'האם אני חייב להשתמש במשרד התיווך שלכם למכירה?',
    faq5A: 'כן. המודל המלא שלנו כולל רישום הדירה המשופצת דרך המשרד המורשה שלנו כדי להבטיח מכירה חלקה ומקסימום תשואה.',

    // Value proposition section (Hebrew)
    valueTitle: 'שחרור ערך חבוי',
    valueDesc: 'הפכו את הדירה המיושנת במרכז הארץ לנכס פרימיום בשווי 80–90 אלף ₪ למ״ר – באמצעות שותפות שמתחלקת בעלויות השיפוץ (CapEx), מטפלת בעיצוב מלא ומבטיחה מכירה דרך משרד התיווך שלנו. הפרויקטים שלנו מספקים בדרך כלל עליית ערך של 15–30%.',
    valueQuote: '"לא האמנו שהדירה הישנה שלנו יכולה להיות שווה כל כך הרבה. הצוות טיפל בהכל ומחיר המכירה הפתיע לטובה." – לקוח מרוצה',

    // Founders section
    foundersTitle: 'המייסדים שלנו',
    founder1Name: 'עידן כהן',
    founder1Role: 'מייסד‑שותף ומנכ״ל',
    founder1Desc: 'לעידן מעל עשור של ניסיון בשוקי הנדל״ן בישראל ובארצות הברית, כולל הובלת רכישות ופרויקטי פיתוח מחדש בתל אביב, לוס אנג׳לס וניו יורק.',
    founder2Name: 'דב ביקי',
    founder2Role: 'מייסד‑שותף וראש תחום עיצוב',
    founder2Desc: 'דב משלב חזון אדריכלי עם ניהול בנייה מעשי. הוא הוביל שיפוצים ייחודיים במיאמי, ירושלים ומעבר לכך.',

    // ROI section translations (Hebrew)
    roiTitle: 'כמה עוד הדירה שלכם יכולה להיות שווה?',
    roiStat1Number: '₪59,200/מ"ר',
    roiStat1Text: 'ממוצע תל אביב',
    roiStat2Number: '₪90,000/מ"ר',
    roiStat2Text: 'נווה צדק',
    roiStat3Number: '₪82,000/מ"ר',
    roiStat3Text: 'רוטשילד',
    roiStat4Number: '₪75,000/מ"ר',
    roiStat4Text: 'פלורנטין',
    roiStat5Number: '15–30%',
    roiStat5Text: 'העלאה טיפוסית',
    roiCalcTitle: 'מחשבון תשואה',
    roiSize: 'גודל דירה (מ"ר)',
    roiCurrent: 'שווי נוכחי (₪)',
    roiCapex: 'הערכת עלות שיפוץ (₪)',
    roiCalcButton: 'חשב',
    roiResSale: 'שווי מכירה צפוי',
    roiResProfit: 'רווח צפוי',
  }
};

let currentLang = 'en';

/**
 * Update text content and placeholders based on the selected language.
 */
function updatePageTexts() {
  // Set HTML dir and lang attributes
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'he' ? 'rtl' : 'ltr';

  // Translate content text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Translate placeholders on inputs/textarea
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });

  // Update language switcher active state
  const btnEn = document.getElementById('lang-en');
  const btnHe = document.getElementById('lang-he');
  if (btnEn && btnHe) {
    btnEn.classList.toggle('active', currentLang === 'en');
    btnHe.classList.toggle('active', currentLang === 'he');
  }
}

/**
 * Set the current language and update page texts.
 * @param {string} lang The language code ('en' or 'he').
 */
function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    updatePageTexts();
  }
}

// Initialize language switching on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Add click handlers to language buttons if they exist
  const btnEn = document.getElementById('lang-en');
  const btnHe = document.getElementById('lang-he');
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnHe) btnHe.addEventListener('click', () => setLanguage('he'));

  // Set initial language based on page's lang attribute if provided
  const initialLang = document.documentElement.lang;
  if (initialLang && translations[initialLang]) {
    currentLang = initialLang;
  }
  updatePageTexts();

  // ROI calculator functionality
  const roiButton = document.getElementById('roi-calc-button');
  if (roiButton) {
    roiButton.addEventListener('click', () => {
      const sizeVal = parseFloat(document.getElementById('roi-size').value) || 0;
      const currentVal = parseFloat(document.getElementById('roi-current').value) || 0;
      const capexVal = parseFloat(document.getElementById('roi-capex').value) || 0;
      const uplift = 0.2; // average uplift 20%
      // Projected resale value: current + capex + uplift on total
      const base = currentVal + capexVal;
      const projected = base * (1 + uplift);
      const profit = projected - base;
      const resultEl = document.getElementById('roi-result');
      if (resultEl) {
        resultEl.innerHTML =
          `<p>${translations[currentLang].roiResSale || 'Projected Resale Value'}: ₪${projected.toLocaleString()}</p>` +
          `<p>${translations[currentLang].roiResProfit || 'Projected Profit'}: ₪${profit.toLocaleString()}</p>`;
      }
    });
  }

  // Case study slider functionality
  const caseSlider = document.getElementById('case-slider-range');
  const afterImg = document.querySelector('.case-img.after');
  if (caseSlider && afterImg) {
    caseSlider.addEventListener('input', () => {
      const value = caseSlider.value;
      // adjust clip path from 0% to 100% based on slider value
      afterImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    });
  }
});