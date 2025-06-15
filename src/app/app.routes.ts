import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PokepasteComponent } from './pokepaste/pokepaste-component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { MovePageComponent } from './move-page/move-page.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'team-overview', component: PokepasteComponent},
    {path: 'my-teams', component: MyTeamsComponent},
    {path: 'pokemon', component: PokemonPageComponent},
    { path: 'move/:name', component: MovePageComponent }
];
