import { Routes } from '@angular/router';
import { Quests } from './quests/quests';
import { Home } from './home/home';
import { QuestDetail } from './quests/quest-detail/quest-detail'; // 👈 nový import

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home page',
    },
    {
        path: 'quests',
        component: Quests,
        title: 'Quests page',
    },
    {
        path: 'quests/:id',   // 👈 nový route pre detail
        component: QuestDetail,
        title: 'Quest detail',
    }
];
