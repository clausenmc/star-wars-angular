import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { FilmsComponent } from './films/films.component';
import { LearnMoreComponent } from './learn-more/learn-more.component';


const routes: Routes = [
   {path:'',component:FilmsComponent},
   {path: 'episodio/:id', component: EpisodeComponent},
   {path: 'saber-mas', component: LearnMoreComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
