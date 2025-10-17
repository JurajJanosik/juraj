import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showQuests = true;

  toggleQuests() {
    console.log('Toggle quests view');
    this.showQuests = !this.showQuests;
  }
}