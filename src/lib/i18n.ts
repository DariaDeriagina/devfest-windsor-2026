import en from '../locales/en.json';
import fr from '../locales/fr.json';

export type Language = 'en' | 'fr';

const translations: Record<Language, typeof en> = {
  en,
  fr,
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations['en'];
}

export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored === 'en' || stored === 'fr') {
      return stored as Language;
    }
  }
  return 'en';
}

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}

export function t(lang: Language, path: string): string {
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

export function getLanguageFromRequest(request: Request): Language {
  const cookie = request.headers.get('cookie');
  if (cookie) {
    const match = cookie.match(/language=([a-z]{2})/);
    if (match && (match[1] === 'en' || match[1] === 'fr')) {
      return match[1] as Language;
    }
  }
  return 'en';
}
