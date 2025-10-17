import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuestsService, Quest } from '../quests.service';

@Component({
  selector: 'app-quest-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quest-detail.html',
  styleUrl: './quest-detail.css'
})
export class QuestDetail implements OnInit {
  quest?: Quest;

  constructor(
    private route: ActivatedRoute,
    private questService: QuestsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.quest = this.questService.getQuestById(id) || undefined;
  }
}

