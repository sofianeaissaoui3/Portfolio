import { Component, inject, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type L = { fr: string; en: string };

interface Project {
  title: string;
  period: string;
  description: L;
  tags: string[];
  link?: string;
  images?: string[];
  gradient: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  langSvc = inject(LanguageService);
  tr      = this.langSvc.tr;
  lang    = this.langSvc.lang;

  selectedProject: Project | null = null;
  galleryIndex = 0;

  hideImg(event: Event) {
    (event.target as HTMLElement).style.display = 'none';
  }

  openGallery(project: Project, startIndex = 0) {
    if (!project.images?.length) return;
    this.selectedProject = project;
    this.galleryIndex = startIndex;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  prev() {
    if (!this.selectedProject?.images) return;
    const len = this.selectedProject.images.length;
    this.galleryIndex = (this.galleryIndex - 1 + len) % len;
  }

  next() {
    if (!this.selectedProject?.images) return;
    this.galleryIndex = (this.galleryIndex + 1) % this.selectedProject.images.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.selectedProject) return;
    if (e.key === 'Escape')      this.closeGallery();
    if (e.key === 'ArrowLeft')   this.prev();
    if (e.key === 'ArrowRight')  this.next();
  }

  projects: Project[] = [
    {
      title: 'Prédiction des prix immobiliers',
      period: 'Fév. – Mars 2026',
      description: {
        fr: 'Projet ML en binôme pour prédire la valeur foncière de biens immobiliers français à partir de données réelles. Pipeline complet : nettoyage, analyse exploratoire, feature engineering et comparaison de modèles (Random Forest, XGBoost). Évaluation avec MAE, RMSE et R².',
        en: 'Pair ML project predicting French real estate prices from real transaction data. Full pipeline: data cleaning, EDA, feature engineering and model comparison (Random Forest, XGBoost). Evaluated with MAE, RMSE and R².',
      },
      tags: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Matplotlib'],
      link: 'https://github.com/sofianeaissaoui3',
      images: [
        'assets/projects/prediction/carte.png',
        'assets/projects/prediction/3d.png',
        'assets/projects/prediction/arbre.png',
        'assets/projects/prediction/distance-paris.png',
        'assets/projects/prediction/matrice-corr.png',
      ],
      gradient: 'linear-gradient(135deg, rgba(79,70,229,.22) 0%, rgba(139,92,246,.08) 100%)',
    },
    {
      title: 'Portfolio Personnel',
      period: '2026',
      description: {
        fr: 'Ce portfolio — conçu et développé from scratch avec Angular 19, animations CSS, design system sombre aux tons orangés et bordeaux, entièrement responsive.',
        en: 'This portfolio — designed and built from scratch with Angular 19, CSS animations, a dark orange/bordeaux design system, fully responsive.',
      },
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive'],
      link: 'https://github.com/sofianeaissaoui3',
      gradient: 'linear-gradient(135deg, rgba(224,96,32,.22) 0%, rgba(139,26,46,.08) 100%)',
    },
    {
      title: 'AiCodeMentor',
      period: 'Oct. 2025 – Jan. 2026',
      description: {
        fr: 'Plateforme full-stack Java 25 avec LLM local intégré. Streaming temps réel via SseEmitter, threads virtuels Java pour la concurrence, API REST Spring Boot, interface Angular et persistance H2. Aide interactive pour l\'apprentissage de la programmation.',
        en: 'Full-stack Java 25 platform with local LLM. Real-time streaming via SseEmitter, Java virtual threads for concurrency, Spring Boot REST API, Angular frontend and H2 persistence. Interactive programming learning assistant.',
      },
      tags: ['Java 25', 'Spring Boot', 'Angular', 'H2', 'LLM', 'SSE', 'Maven'],
      link: 'https://github.com/sofianeaissaoui3',
      images: [
        'assets/projects/aicodementor/accueil.png',
        'assets/projects/aicodementor/accueil-student.png',
        'assets/projects/aicodementor/accueil-teacher.png',
        'assets/projects/aicodementor/add-exo.png',
        'assets/projects/aicodementor/res-exo.png',
      ],
      gradient: 'linear-gradient(135deg, rgba(224,96,32,.22) 0%, rgba(234,88,12,.06) 100%)',
    },
    {
      title: 'Compilateur TPC',
      period: 'Jan. 2025',
      description: {
        fr: 'Compilateur pour le langage TPC en binôme : table des symboles en liste chaînée, vérifications sémantiques et traduction vers assembleur NASM. Parcours de l\'AST, gestion de portée et compatibilité des types, en C avec Flex et Bison.',
        en: 'Pair-built TPC language compiler: linked-list symbol table, semantic checks and NASM code generation. AST traversal, scope management and type compatibility in C with Flex and Bison.',
      },
      tags: ['C', 'Flex', 'Bison', 'NASM', 'Compilateur'],
      link: 'https://github.com/sofianeaissaoui3',
      images: ['assets/projects/tpc.png'],
      gradient: 'linear-gradient(135deg, rgba(100,116,139,.3) 0%, rgba(71,85,105,.08) 100%)',
    },
    {
      title: 'Cascadia',
      period: 'Sep. 2024 – Jan. 2025',
      description: {
        fr: 'Jeu de stratégie Java 23 où les joueurs construisent des chaînes d\'habitats et forment des groupes d\'animaux. Architecture MVC, streams Java, records, pattern matching et principes avancés de POO.',
        en: 'Java 23 strategy game where players build habitat chains and form animal groups. MVC architecture, Java streams, records, pattern matching and advanced OOP principles.',
      },
      tags: ['Java 23', 'MVC', 'POO', 'Git', 'Eclipse'],
      link: 'https://github.com/sofianeaissaoui3',
      images: [
        'assets/projects/cascadia/accueil.jpeg',
        'assets/projects/cascadia/tuiles-hex.jpeg',
        'assets/projects/cascadia/tuiles-carrees.jpeg',
      ],
      gradient: 'linear-gradient(135deg, rgba(16,185,129,.2) 0%, rgba(5,150,105,.06) 100%)',
    },
    {
      title: 'Abeilles vs Frelons',
      period: 'Nov. – Déc. 2023',
      description: {
        fr: 'Jeu de stratégie tour par tour en C avec interface graphique MLV. Deux camps s\'affrontent sur une grille : déplacements, combats, ressources et conditions de victoire. Listes chaînées et allocations dynamiques.',
        en: 'Turn-based strategy game in C with MLV graphics. Two camps fight on a grid: unit movement, combat, resources and victory conditions. Linked lists and dynamic memory allocation.',
      },
      tags: ['C', 'MLV', 'Structures dynamiques'],
      link: 'https://github.com/sofianeaissaoui3',
      images: ['assets/projects/abeilles.png'],
      gradient: 'linear-gradient(135deg, rgba(245,158,11,.2) 0%, rgba(180,83,9,.06) 100%)',
    },
    {
      title: 'CYGMA',
      period: 'Oct. 2023 – Jan. 2024',
      description: {
        fr: 'Application web locale de gestion d\'un jeu de cartes fictif : collection, création de decks, interactions entre joueurs. Conception de la base de données relationnelle, requêtes SQL complexes, authentification et gestion de sessions.',
        en: 'Local web app for a fictional card game: collection management, deck building and player interactions. Relational database design, complex SQL queries, authentication and session management.',
      },
      tags: ['SQL', 'HTML', 'CSS', 'PHP'],
      link: 'https://github.com/sofianeaissaoui3',
      images: [
        'assets/projects/cygma/connexion.png',
        'assets/projects/cygma/inscription.png',
        'assets/projects/cygma/pagemacollection.png',
        'assets/projects/cygma/pagemesdecks.png',
        'assets/projects/cygma/cartesdeckn1.png',
        'assets/projects/cygma/mesdecks.png',
        'assets/projects/cygma/listejoueurs.png',
        'assets/projects/cygma/propositionmodif.png',
        'assets/projects/cygma/changementmdp.png',
        'assets/projects/cygma/saisienouveaumdp.png',
      ],
      gradient: 'linear-gradient(135deg, rgba(6,182,212,.2) 0%, rgba(8,145,178,.06) 100%)',
    },
    {
      title: 'VideoFlex',
      period: 'Oct. – Déc. 2022',
      description: {
        fr: 'Plateforme web locale de type streaming : comptes, profils, films/séries, recommandations et simulation de visionnage. Conception base de données, requêtes SQL et chiffrement des mots de passe.',
        en: 'Local Netflix-style streaming platform: accounts, profiles, films/series, recommendations and viewing simulation. Database design, SQL queries and password hashing.',
      },
      tags: ['SQL', 'HTML', 'CSS', 'PHP'],
      link: 'https://github.com/sofianeaissaoui3',
      images: [
        'assets/projects/videoflex/page_connexion.png',
        'assets/projects/videoflex/page_inscription.png',
        'assets/projects/videoflex/page_choix_profil.png',
        'assets/projects/videoflex/page_recommendations.png',
        'assets/projects/videoflex/page_serie.png',
        'assets/projects/videoflex/page_video.png',
        'assets/projects/videoflex/page_video_onglet_acteurs.png',
        'assets/projects/videoflex/page_mdp_oublie_verifemail.png',
        'assets/projects/videoflex/page_mdp_oublie_change_mdp.png',
      ],
      gradient: 'linear-gradient(135deg, rgba(239,68,68,.2) 0%, rgba(185,28,28,.06) 100%)',
    },
    {
      title: 'Jeu de l\'Oie',
      period: 'Oct. – Nov. 2022',
      description: {
        fr: 'Jeu de l\'Oie en C avec plateau en spirale, déplacements selon lancer de dés, cases spéciales et mode simulation statistique sur un grand nombre de parties. Décomposition modulaire et logique de jeu complète.',
        en: 'Snakes-and-Ladders game in C with spiral board, dice-based moves, special tiles and a statistical simulation mode over many games. Modular decomposition and full game logic.',
      },
      tags: ['C', 'Algorithmique', 'Structures'],
      link: 'https://github.com/sofianeaissaoui3',
      images: ['assets/projects/jeu-oie.png'],
      gradient: 'linear-gradient(135deg, rgba(168,85,247,.2) 0%, rgba(124,58,237,.06) 100%)',
    },
  ];
}
