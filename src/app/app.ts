import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
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