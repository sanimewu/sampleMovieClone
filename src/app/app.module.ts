import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMovieListsComponent } from './movie/all-movie-lists/all-movie-lists.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { PercentagePipe } from './pipe/percentage.pipe';
import { UpcomingMovieListComponent } from './movie/upcoming-movie-list/upcoming-movie-list.component';
import { DescriptionComponent } from './movie/description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    AllMovieListsComponent,
    CapitalizePipe,
    PercentagePipe,
    UpcomingMovieListComponent,
    DescriptionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
