import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMovieListsComponent } from './movie/all-movie-lists/all-movie-lists.component';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { PercentagePipe } from './pipe/percentage.pipe';
import { UpcomingMovieListComponent } from './movie/upcoming-movie-list/upcoming-movie-list.component';
import { DescriptionComponent } from './movie/description/description.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(en);


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
    FormsModule,

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
