import { Component, OnInit, OnDestroy, inject, Signal, computed} from '@angular/core';
import { QuestItem } from './quest-item/quest-item';
import { QuestsService, Quest } from './quests.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [QuestItem, RouterModule, FormsModule],  
  templateUrl: './quests.html',
  styleUrls: ['./quests.css']
})
export class Quests implements OnInit, OnDestroy {
  private questsService = inject(QuestsService);

  questsSig = this.questsService.questsSig;
  quests: Signal<Quest[]> = computed(() => this.questsSig());

  
  onAdd(form: any) {
    const { title, description, xp } = form.value;

    const newQuest = {
      id: Date.now(),          
      title,
      description,
      xp: Number(xp)
    };

    this.questsService.addQuest(newQuest);
    form.reset();
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
