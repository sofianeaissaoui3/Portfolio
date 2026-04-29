import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type L = { fr: string; en: string };

interface ExperienceItem {
  role: L;
  company: string;
  period: string;
  location: string;
  description: { fr: string[]; en: string[] };
  tags: string[];
  logo?: string;
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;
  lang    = this.langSvc.lang;

  experiences: ExperienceItem[] = [
    {
      role: {
        fr: 'Stagiaire — Software Development & Cloud Automation',
        en: 'Intern — Software Development & Cloud Automation',
      },
      company: 'Nations Unies (ONU)',
      period: '2025 – 2026',
      location: 'Genève, Suisse',
      logo: 'assets/logo_UN.webp',
      description: {
        fr: [
          'Développement logiciel et automatisation cloud au sein d\'une organisation internationale.',
          'Participation à des projets d\'ingénierie dans un environnement multiculturel et international.',
        ],
        en: [
          'Software development and cloud automation within an international organisation.',
          'Contributed to engineering projects in a multicultural and international environment.',
        ],
      },
      tags: ['Cloud', 'Automation', 'Software Development'],
    },
  ];
}
