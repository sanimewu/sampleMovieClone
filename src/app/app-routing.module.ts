import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginSignupComponent} from "./login-signup/login-signup.component";
import {DescriptionComponent} from "./movie/description/description.component";
import {AllMovieListsComponent} from "./movie/all-movie-lists/all-movie-lists.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginSignupComponent
  },
  {
    path:'description',
    component:DescriptionComponent,
  },
  {
    path:'allMovieLists',
    component:AllMovieListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
