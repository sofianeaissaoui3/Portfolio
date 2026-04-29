import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type L = { fr: string; en: string };
interface Hobby { icon: string; title: L; description: L; }

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss'
})
export class Hobbies {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;
  lang    = this.langSvc.lang;

  hobbies: Hobby[] = [
    {
      icon: '🍽️',
      title:       { fr: 'Cuisine méditerranéenne', en: 'Mediterranean cuisine' },
      description: { fr: 'Passionné par les saveurs du bassin méditerranéen — tajines, mezze, pâtes fraîches et grillades.', en: 'A passion for Mediterranean flavours — tagines, mezze, fresh pasta and grilled dishes.' },
    },
    {
      icon: '🏋️',
      title:       { fr: 'Musculation',  en: 'Weight training' },
      description: { fr: 'Entraînement régulier en salle, avec une approche méthodique de la progression et de la récupération.', en: 'Regular gym training with a methodical approach to progress and recovery.' },
    },
    {
      icon: '🥋',
      title:       { fr: 'Jiu-jitsu brésilien', en: 'Brazilian Jiu-Jitsu' },
      description: { fr: 'Pratique du BJJ, un art martial technique qui développe la discipline, la stratégie et la persévérance.', en: 'Practising BJJ, a technical martial art that builds discipline, strategy and perseverance.' },
    },
    {
      icon: '♟️',
      title:       { fr: 'Échecs', en: 'Chess' },
      description: { fr: 'Passionné par les échecs, un jeu qui développe la pensée stratégique, la concentration et la capacité d\'anticipation.', en: 'Passionate about chess, a game that develops strategic thinking, concentration and anticipation skills.' },
    },
  ];
}
