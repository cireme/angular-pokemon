import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {CharacterCreationComponent} from './components/character-creation/character-creation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters',
    children: [
      { path: '', component: CharacterListComponent },
      { path: 'creation', component: CharacterCreationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
