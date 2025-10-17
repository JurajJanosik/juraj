import { Routes } from '@angular/router';
import { Quests } from './quests/quests';
import { Home } from './home/home';

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
    }
];
