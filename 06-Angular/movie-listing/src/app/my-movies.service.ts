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
    localStorage.setItem("movies", JSON.stringify(this.favourites));
  }

  removeFavourite(movie) {
    let index = -1;

    for (let i = 0; i < this.favourites.length; i++) {
      if (movie.title === this.favourites[i].title) {
        index = i;
      }
    }
    if (index !== -1) this.favourites.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(this.favourites));
  }

  getMovies() {
    return this.favourites;
  }

  clearFavourite() {
    this.favourites = [];
    return this.favourites;
  }
}
