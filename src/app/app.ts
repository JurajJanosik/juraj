import { Component } from '@angular/core';
import { Quests } from './quests/quests';
import { HeaderComponent } from "./header/header"; // cesta podľa projektu

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Quests, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showQuests = true; // prepínač zobrazovania

  toggleQuests() {
    console.log('Toggle quests view');
    this.showQuests = !this.showQuests;
  }
}