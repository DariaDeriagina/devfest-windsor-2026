import en from '../locales/en.json';
import fr from '../locales/fr.json';

type Language = 'en' | 'fr';

const translations = { en, fr };

function t(lang: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }
  
  return typeof value === 'string' ? value : path;
}

function swapPageLanguage(lang: Language) {
  // Map of selector to translation key
  const translations_map: Record<string, string> = {
    '[data-i18n="nav.home"]': 'nav.home',
    '[data-i18n="nav.about"]': 'nav.about',
    '[data-i18n="nav.venue"]': 'nav.venue',
    '[data-i18n="nav.faq"]': 'nav.faq',
    '[data-i18n="nav.getTickets"]': 'nav.getTickets',
    '[data-i18n="hero.description"]': 'hero.description',
    '[data-i18n="hero.subtitle"]': 'hero.subtitle',
    '[data-i18n="hero.cta"]': 'hero.cta',
    '[data-i18n="speakers.title"]': 'speakers.title',
    '[data-i18n="speakers.subtitle"]': 'speakers.subtitle',
    '[data-i18n="speakers.viewAll"]': 'speakers.viewAll',
    '[data-i18n="schedule.title"]': 'schedule.title',
    '[data-i18n="schedule.description"]': 'schedule.description',
    '[data-i18n="cta.title"]': 'cta.title',
    '[data-i18n="cta.description"]': 'cta.description',
    '[data-i18n="cta.button"]': 'cta.button',
    '[data-i18n="tickets.title"]': 'tickets.title',
    '[data-i18n="tickets.description"]': 'tickets.description',
    '[data-i18n="tickets.questions"]': 'tickets.questions',
    '[data-i18n="tickets.groupDiscount"]': 'tickets.groupDiscount',
    '[data-i18n="tickets.contactSupport"]': 'tickets.contactSupport',
    '[data-i18n="faq.title"]': 'faq.title',
    '[data-i18n="faq.cantFind"]': 'faq.cantFind',
    '[data-i18n="faq.contactUs"]': 'faq.contactUs',
    '[data-i18n="footer.quickLinks"]': 'footer.quickLinks',
    '[data-i18n="footer.connect"]': 'footer.connect',
    '[data-i18n="footer.copyright"]': 'footer.copyright',
  };

  // Swap all text
  Object.entries(translations_map).forEach(([selector, key]) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const translated = t(lang, key);
      el.textContent = translated;
    });
  });
}

export function initClientI18n() {
  const currentLang = (localStorage.getItem('language') || 'en') as Language;
  
  if (currentLang === 'fr') {
    swapPageLanguage('fr');
  }

  // Listen for language changes
  window.addEventListener('languageChanged', (e: any) => {
    const lang = e.detail.lang as Language;
    swapPageLanguage(lang);
  });
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initClientI18n);
} else {
  initClientI18n();
}
