import {Component, OnInit, PipeTransform} from '@angular/core';
import {MovieListService} from "../../service/movie-list.service";
import {CapitalizePipe} from "../../pipe/capitalize.pipe";

@Component({
  selector: 'app-all-movie-lists',
  templateUrl: './all-movie-lists.component.html',
  styleUrl: './all-movie-lists.component.scss'
})
export class AllMovieListsComponent implements OnInit{
  movieList: any=[];
  latestMovie: any=[];
  constructor(private movieListService: MovieListService) {

  }
  ngOnInit() {
    this.getAllMovieLists();
    this.getLatestMovieLists();
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
