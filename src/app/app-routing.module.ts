import { PersonItemComponent } from './person-item/person-item.component';
import { PersonListComponent } from './person-list/person-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'person', component: PersonListComponent},
  {path: 'person/:id', component: PersonItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
