import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyMoviesService {
  favourites = [];

  constructor(private http: HttpClient) {}

  addFavourite(movie) {
    this.favourites.push(movie);
  }

  getMovies() {
    return this.favourites;
  }

  clearFavourite() {
    this.favourites = [];
    return this.favourites;
  }
}
