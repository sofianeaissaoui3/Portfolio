import { Component, HostListener, signal, inject, computed } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;

  scrolled  = signal(false);
  menuOpen  = signal(false);

  navLinks = computed(() => [
    { label: this.tr().nav_profile,    anchor: '#hero' },
    { label: this.tr().nav_skills,     anchor: '#skills' },
    { label: this.tr().nav_projects,   anchor: '#projects' },
    { label: this.tr().nav_experience, anchor: '#experience' },
    { label: this.tr().nav_education,  anchor: '#education' },
    { label: this.tr().nav_hobbies,    anchor: '#hobbies' },
    { label: this.tr().nav_contact,    anchor: '#contact' },
  ]);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 60); }

  scrollTo(anchor: string) {
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }
}
