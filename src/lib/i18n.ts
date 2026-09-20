// i18n translations
export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.venue': 'Venue',
    'nav.faq': 'FAQ',
    'nav.getTickets': 'Get Tickets',
    'schedule.title': 'Schedule',
    'schedule.description': 'Browse the full event schedule',
    'schedule.time': 'TIME',
    'schedule.session': 'SESSION',
    'schedule.location': 'LOCATION',
    'schedule.add': 'ADD',
    'track.all': 'ALL',
    'track.googleCloud': 'Google Cloud',
    'track.buildWithAI': 'Build with AI',
    'track.fullStack': 'Full Stack',
    'track.entrepreneurship': 'Entrepreneurship',
    'track.cybersecurity': 'Cybersecurity',
    'track.highSchool': 'High School Track',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.venue': 'Lieu',
    'nav.faq': 'FAQ',
    'nav.getTickets': 'Obtenir des billets',
    'schedule.title': 'Horaire',
    'schedule.description': 'Parcourez l\'horaire complet de l\'événement',
    'schedule.time': 'HEURE',
    'schedule.session': 'SESSION',
    'schedule.location': 'LIEU',
    'schedule.add': 'AJOUTER',
    'track.all': 'TOUS',
    'track.googleCloud': 'Google Cloud',
    'track.buildWithAI': 'Build with AI',
    'track.fullStack': 'Full Stack',
    'track.entrepreneurship': 'Entrepreneurship',
    'track.cybersecurity': 'Cybersecurity',
    'track.highSchool': 'High School Track',
  },
};

export function t(lang: string, key: string): string {
  const langTranslations = translations[lang as keyof typeof translations];
  if (!langTranslations) return key;
  return langTranslations[key as keyof typeof langTranslations] || key;
}

export function getTranslation(key: string, lang?: string): string {
  const currentLang = lang || (typeof localStorage !== 'undefined' ? localStorage.getItem('language') : 'en') || 'en';
  return t(currentLang, key);
}
