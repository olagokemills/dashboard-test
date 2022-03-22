import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', redirectTo:'dashboard', pathMatch:'full' 
  },
  {
    path:'dashboard', component:HomeComponent,
  },
  {
    path:'analytics', component:HomeComponent
  },
  {
    path:'projects', component:HomeComponent
  },
  {
    path:'tracking', component:HomeComponent
  },
  {
    path:'history', component:HomeComponent
  },
  {
    path:'settings', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
