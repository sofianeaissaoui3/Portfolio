import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type L = { fr: string; en: string };

interface EducationItem {
  degree: L;
  field: L;
  school: string;
  period: string;
  location: string;
  description: L;
  logo: string;
  tags: string[];
  current?: boolean;
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;
  lang    = this.langSvc.lang;

  educations: EducationItem[] = [
    {
      degree: {
        fr: 'Master — Logiciels & Ingénierie des Données',
        en: 'Master\'s — Software & Data Engineering',
      },
      field: {
        fr: 'Génie Logiciel & Data Engineering',
        en: 'Software Engineering & Data Engineering',
      },
      school: 'Université Gustave Eiffel',
      period: '2025 – 2027',
      location: 'Champs-sur-Marne, France',
      description: {
        fr: 'Spécialisation en développement logiciel avancé, ingénierie des données, cloud et architecture logicielle de grande échelle.',
        en: 'Specialisation in advanced software development, data engineering, cloud computing and large-scale software architecture.',
      },
      logo: 'assets/logo_gustave_eiffel.jpg',
      tags: ['Java 25', 'Cloud', 'Data Engineering', 'Architecture'],
      current: true,
    },
    {
      degree: {
        fr: 'Licence d\'Informatique',
        en: 'Bachelor\'s in Computer Science',
      },
      field: {
        fr: 'Génie Logiciel & Algorithmique',
        en: 'Software Engineering & Algorithms',
      },
      school: 'Université Gustave Eiffel',
      period: '2021 – 2025',
      location: 'Champs-sur-Marne, France',
      description: {
        fr: 'Solides fondamentaux en algorithmique, structures de données, programmation orientée objet, bases de données et réseaux.',
        en: 'Strong foundations in algorithms, data structures, object-oriented programming, databases and networks.',
      },
      logo: 'assets/logo_gustave_eiffel.jpg',
      tags: ['Java', 'C/C++', 'Algorithmique', 'SQL', 'Réseaux'],
    },
    {
      degree: {
        fr: 'Baccalauréat Scientifique',
        en: 'Scientific Baccalaureate',
      },
      field: {
        fr: 'Mention Assez Bien — Maths & Physique-Chimie',
        en: 'Honours (Assez Bien) — Maths & Physics-Chemistry',
      },
      school: 'Lycée Pablo Picasso',
      period: '2020 – 2021',
      location: 'Fontenay-sous-Bois, France',
      description: {
        fr: 'Option Maths Expertes et Euro Anglais. Formation scientifique rigoureuse, socle des études en informatique.',
        en: 'Advanced Mathematics and English European option. Rigorous scientific curriculum, foundation for CS studies.',
      },
      logo: '',
      tags: ['Mathématiques', 'Physique-Chimie'],
    },
  ];
}
