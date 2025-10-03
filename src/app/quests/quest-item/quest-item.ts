import { Component,input,output } from '@angular/core';
import { Quest } from '../quests';

@Component({
  selector: 'app-quest-item',
  imports: [],
  templateUrl: './quest-item.html',
  styleUrl: './quest-item.css'
})
export class QuestItem {
  quest = input.required<Quest>();

  deleteQuest = output<number>();
}


