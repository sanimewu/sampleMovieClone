import {Component, OnInit, PipeTransform} from '@angular/core';
import {MovieListService} from "../../service/movie-list.service";
import {CapitalizePipe} from "../../pipe/capitalize.pipe";
import {filter, map, Subscription, take, tap} from "rxjs";

@Component({
  selector: 'app-all-movie-lists',
  templateUrl: './all-movie-lists.component.html',
  styleUrl: './all-movie-lists.component.scss'
})
export class AllMovieListsComponent implements OnInit{
  movieList: any=[];
  subMovie!:Subscription;
  constructor(private movieListService: MovieListService) {

  }
  ngOnInit() {
    this.getAllMovieLists();
    this.MovieFilter();
  }

  getAllMovieLists(){
    return this.movieListService.getMovies().subscribe({
      next:(res:any)=>{
        this.movieList = res.results;
        console.log(res.results);
      },
      error:(err:any)=>{
        console.log('Something Error ',err);
      }
    })
  }

  MovieFilter(){
    const movie$ = this.movieListService.getMovies();
    this.subMovie = movie$.pipe(
      tap(console.log),
      take(3),
    //
    ).subscribe({
      next: test1
    });
  }

}
const test1 = (res:any) => {
  take(2);
  // this.movieList = res.results;
  console.log('list 2',res.results);
}
