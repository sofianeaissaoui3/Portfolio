import { Component } from '@angular/core';
import { Navbar }    from './components/navbar/navbar';
import { Hero }      from './components/hero/hero';
import { Skills }    from './components/skills/skills';
import { Projects }  from './components/projects/projects';
import { Experience }from './components/experience/experience';
import { Education } from './components/education/education';
import { Hobbies }   from './components/hobbies/hobbies';
import { Contact }   from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Skills, Projects, Experience, Education, Hobbies, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
