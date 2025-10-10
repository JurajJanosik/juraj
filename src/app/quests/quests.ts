import { Component, OnInit, OnDestroy, inject, } from '@angular/core';
import { QuestItem } from './quest-item/quest-item';
import { QuestsService } from './quests.service';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [QuestItem],
  templateUrl: './quests.html',
  styleUrls: ['./quests.css']
})
export class Quests implements OnInit, OnDestroy {
  private questsService = inject(QuestsService);

  quests = this.questsService.getQuests();

  addQuest() {
    const q = { id: 1, title: 'New Quest', description: 'A new quest added.', xp: 50 };
    this.questsService.addQuest(q);
  }

  deleteQuest(id: number) {
    this.questsService.removeQuest(id);
  }

  ngOnInit() {
    console.log('Quests component initialized.');
  }

  ngOnDestroy() {
    console.log('Quests component destroyed.');
  }
}