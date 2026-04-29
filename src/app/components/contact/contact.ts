import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;

  languages = [
    { flag: '🇫🇷', nameKey: 'lang_fr' as const, levelKey: 'lang_fr_level' as const },
    { flag: '🇬🇧', nameKey: 'lang_en' as const, levelKey: 'lang_en_level' as const },
    { flag: '🇪🇸', nameKey: 'lang_es' as const, levelKey: 'lang_es_level' as const },
    { flag: '🇩🇪', nameKey: 'lang_de' as const, levelKey: 'lang_de_level' as const },
  ];
}
