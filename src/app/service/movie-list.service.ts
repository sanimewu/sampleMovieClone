import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieListService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getMovies() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}&query=star`);
  }
  getLatestMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${environment.apiKey}&query=star`);
  }
}
