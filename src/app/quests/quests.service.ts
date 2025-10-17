import { Injectable } from '@angular/core';

export interface Quest {
  id: number;
  title: string;
  description: string;
  xp: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuestsService {
  private quests: Quest[] = [
    { id: 1, title: 'Čubik', description: 'Tam to všetko začalo.', xp: 40 },
    { id: 2, title: 'Cyprich', description: 'Dostal vilagoše od Samka a ten dostal frčku na nos.', xp: 120 },
    { id: 3, title: 'Zlomený nos na SPŠ-IT', description: 'Bitka storočia skočila zlomeninou.', xp: 60 }
  ];

  getQuests(): Quest[] {
    return this.quests;
  }

  removeQuest(id: number) {
    this.quests = this.quests.filter(q => q.id !== id);
  }

  addQuest(newQuest: Quest) {
    this.quests.push(newQuest);
  }

  getQuestById(id: number): Quest | undefined {
    return this.quests.find(q => q.id === id);
  }

}
