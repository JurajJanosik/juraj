import { Component, Query, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import {  Quests } from "./quests/quests";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Quests],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juraj');
}
