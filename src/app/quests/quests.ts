import { Component, inject } from '@angular/core';
import { QuestItem } from './quest-item/quest-item';
import { QuestsService } from '../quests.service';

export interface Quest {
  id: number;
  title: string;
  description: string;
  xp: number;
}

@Component({
  selector: 'app-quests',
  templateUrl: './quests.html',
  styleUrls: ['./quests.css'],
  standalone: true,
  imports: [QuestItem]
})

// export class QuestsComponent {
//   quests: Quest[] = [];

//   constructor(private questsService: QuestsService) {}

//   ngOnInit() {
//     this.quests = this.questsService.getQuests();
//   }

//   removeQuest(id: number) {
//     this.questsService.removeQuest(id);
//     this.quests = this.questsService.getQuests();
//   }

//   addQuest(quest: Quest) {
//     this.questsService.addQuest(quest);
//     this.quests = this.questsService.getQuests();
//   }
// }

export class Quests {
  quests: Quest[] = inject(QuestsService).getQuests();
  questFormVisible = false;

  showQuestForm() {
    this.questFormVisible = !this.questFormVisible;
  }
  deleteQuest(id: number) {
    this.quests = this.quests.filter((quest) => quest.id !== id);
    
  }
}