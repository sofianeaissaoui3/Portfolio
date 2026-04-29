import { Component, inject } from '@angular/core';
import { LanguageService, Lang } from '../../services/language.service';

type L = { fr: string; en: string };

interface SkillItem  { name: string | L; level: number; }
interface SkillGroup { catKey: 'cat_lang' | 'cat_tools' | 'cat_soft'; icon: string; skills: SkillItem[]; }

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;
  lang    = this.langSvc.lang;

  skillGroups: SkillGroup[] = [
    {
      catKey: 'cat_lang', icon: '💻',
      skills: [
        { name: 'Java',                       level: 100 },
        { name: 'Python',                     level: 80  },
        { name: 'C / C++',                    level: 70  },
        { name: 'SQL',                        level: 70  },
        { name: 'HTML / CSS / TypeScript',    level: 50  },
        { name: 'Haskell / Perl',             level: 40  },
      ]
    },
    {
      catKey: 'cat_tools', icon: '🛠️',
      skills: [
        { name: 'Spring Boot',               level: 90 },
        { name: 'Angular',                   level: 80 },
        { name: 'Linux / macOS',             level: 80 },
        { name: 'Git / GitHub',              level: 60 },
        { name: 'Maven',                     level: 50 },
        { name: 'MongoDB / PostgreSQL / H2', level: 50 },
      ]
    },
    {
      catKey: 'cat_soft', icon: '🧠',
      skills: [
        { name: { fr: 'Travail en équipe',       en: 'Teamwork'        }, level: 100 },
        { name: { fr: 'Curiosité',               en: 'Curiosity'       }, level: 100 },
        { name: { fr: 'Résolution de problèmes', en: 'Problem solving' }, level: 80  },
        { name: { fr: 'Communication',           en: 'Communication'   }, level: 80  },
        { name: { fr: 'Adaptabilité',            en: 'Adaptability'    }, level: 80  },
      ]
    }
  ];

  skillName(name: string | L): string {
    if (typeof name === 'string') return name;
    return name[this.lang()];
  }
}
