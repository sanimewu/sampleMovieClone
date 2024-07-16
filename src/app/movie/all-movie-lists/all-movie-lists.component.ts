import {Component, OnInit} from '@angular/core';
import {MovieListService} from "../../service/movie-list.service";

@Component({
  selector: 'app-all-movie-lists',
  templateUrl: './all-movie-lists.component.html',
  styleUrl: './all-movie-lists.component.scss'
})
export class AllMovieListsComponent implements OnInit{
  movieList: any=[];
  constructor(private movieListService: MovieListService) {

  }
  ngOnInit() {
    this.getAllMovieLists();
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

}
