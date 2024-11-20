import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, Subscription, takeUntil} from "rxjs";
import {data} from "autoprefixer";
import {MovieListService} from "../../service/movie-list.service";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit,OnDestroy {
  private destroy$ = new Subject<void>();
  movieListService:MovieListService = inject(MovieListService);
  movie$ = this.movieListService.getMovies();
  constructor() {
  }
  ngOnInit() {
    this.movieListService.test().pipe(takeUntil(this.destroy$)).subscribe((res)=>{
      console.log('descriptionCom',res);
    });
  }

  unsubscribe() {
    this.destroy$.next();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    console.log('Unsubscribe description');
  }
}
