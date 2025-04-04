import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PokepasteComponent } from './pokepaste/pokepaste-component';
import { MyTeamsComponent } from './my-teams/my-teams.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'team-overview', component: PokepasteComponent},
    {path: 'my-teams', component: MyTeamsComponent},
];
