import { Component, inject, signal, effect } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;

  photoUrl      = 'assets/photo.jpg';
  fallbackPhoto = 'assets/placeholder-avatar.svg';

  displayRole = signal('');
  typing      = signal(true);

  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const full = this.tr().role;
      this.startTypewriter(full);
    });
  }

  private startTypewriter(text: string) {
    if (this.timer) clearTimeout(this.timer);
    this.displayRole.set('');
    this.typing.set(true);
    let i = 0;
    const tick = () => {
      i++;
      this.displayRole.set(text.slice(0, i));
      if (i < text.length) {
        this.timer = setTimeout(tick, 50);
      } else {
        this.typing.set(false);
      }
    };
    // Léger délai initial pour que la page soit chargée
    this.timer = setTimeout(tick, 400);
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = this.fallbackPhoto;
  }
}
