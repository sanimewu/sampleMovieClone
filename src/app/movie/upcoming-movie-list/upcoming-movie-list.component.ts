import {Component, OnInit} from '@angular/core';
import {MovieListService} from "../../service/movie-list.service";

@Component({
  selector: 'app-upcoming-movie-list',
  templateUrl: './upcoming-movie-list.component.html',
  styleUrl: './upcoming-movie-list.component.scss'
})
export class UpcomingMovieListComponent implements OnInit{

  latestMovie: any=[];
  constructor(private movieListService: MovieListService) {

  }
  ngOnInit() {
    this.getLatestMovieLists();
  }

  getLatestMovieLists(){
    return this.movieListService.getLatestMovies().subscribe({
      next:(res:any)=>{
        this.latestMovie = res.results;
        console.log(res.results);
      },
      error:(err:any)=>{
        console.log('Something Error ',err);
      }
    })
  }
}
