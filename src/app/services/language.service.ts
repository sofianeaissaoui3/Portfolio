import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'fr' | 'en';

export const TRANSLATIONS = {
  fr: {
    nav_profile:    'Profil',
    nav_skills:     'Compétences',
    nav_projects:   'Projets',
    nav_experience: 'Expériences',
    nav_education:  'Formation',
    nav_hobbies:    'Hobbies',
    nav_contact:    'Contact',

    greeting: 'Bonjour, je suis',
    role:     'Master Logiciels & Ingénierie des Données',
    bio:      'Étudiant en Master à l\'Université Gustave Eiffel, passionné par le développement full-stack et le cloud. Ancien stagiaire aux Nations Unies à Genève, je cherche à concevoir des solutions logicielles ambitieuses avec rigueur et curiosité.',
    btn_contact: 'Me contacter',
    btn_cv:      'Télécharger CV',

    skills_title: 'Compétences',
    skills_sub:   'Mes langages, outils et savoir-faire',
    cat_lang:     'Langages',
    cat_tools:    'Frameworks & Outils',
    cat_soft:     'Soft Skills',

    projects_title: 'Projets',
    projects_sub:   'Ce que j\'ai conçu et développé',
    see_project:    'Voir le projet →',

    exp_title: 'Expériences',
    exp_sub:   'Mon parcours professionnel',

    edu_title: 'Formation',
    edu_sub:   'Mon parcours académique',

    hobbies_title: 'Hobbies & Passions',
    hobbies_sub:   'Ce qui m\'anime en dehors du code',

    contact_title: 'Contact',
    contact_sub:   'Prenons contact',
    lbl_email:     'Email',
    lbl_phone:     'Téléphone',
    lbl_location:  'Localisation',
    lbl_languages: 'Langues',
    lbl_mobility:  'Mobilité',
    location_val:  'Genève, Suisse · Île-de-France, France',
    mobility_val:  'Permis B — Véhicule personnel',
    lang_fr:       'Français',
    lang_fr_level: 'Langue maternelle',
    lang_en:       'Anglais',
    lang_en_level: 'Avancé',
    lang_es:       'Espagnol',
    lang_es_level: 'Intermédiaire',
    lang_de:       'Allemand',
    lang_de_level: 'Débutant',

    footer: 'Sofiane Aissaoui · Fait avec Angular & passion',
  },
  en: {
    nav_profile:    'Profile',
    nav_skills:     'Skills',
    nav_projects:   'Projects',
    nav_experience: 'Experience',
    nav_education:  'Education',
    nav_hobbies:    'Hobbies',
    nav_contact:    'Contact',

    greeting: 'Hi, I\'m',
    role:     'Master in Software & Data Engineering',
    bio:      'Master\'s student at Université Gustave Eiffel, passionate about full-stack development and cloud. Former intern at the United Nations in Geneva, I strive to build ambitious software solutions with rigour and curiosity.',
    btn_contact: 'Contact me',
    btn_cv:      'Download CV',

    skills_title: 'Skills',
    skills_sub:   'My languages, tools and know-how',
    cat_lang:     'Languages',
    cat_tools:    'Frameworks & Tools',
    cat_soft:     'Soft Skills',

    projects_title: 'Projects',
    projects_sub:   'What I\'ve designed and built',
    see_project:    'View project →',

    exp_title: 'Experience',
    exp_sub:   'My professional journey',

    edu_title: 'Education',
    edu_sub:   'My academic background',

    hobbies_title: 'Hobbies & Passions',
    hobbies_sub:   'What drives me outside of code',

    contact_title: 'Contact',
    contact_sub:   'Let\'s get in touch',
    lbl_email:     'Email',
    lbl_phone:     'Phone',
    lbl_location:  'Location',
    lbl_languages: 'Languages',
    lbl_mobility:  'Mobility',
    location_val:  'Geneva, Switzerland · Île-de-France, France',
    mobility_val:  'Driving License B — Personal vehicle',
    lang_fr:       'French',
    lang_fr_level: 'Native',
    lang_en:       'English',
    lang_en_level: 'Advanced',
    lang_es:       'Spanish',
    lang_es_level: 'Intermediate',
    lang_de:       'German',
    lang_de_level: 'Beginner',

    footer: 'Sofiane Aissaoui · Built with Angular & passion',
  },
} as const;

export type TKey = keyof typeof TRANSLATIONS.fr;

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('fr');
  tr   = computed(() => TRANSLATIONS[this.lang()]);

  toggle() {
    this.lang.set(this.lang() === 'fr' ? 'en' : 'fr');
  }
}
