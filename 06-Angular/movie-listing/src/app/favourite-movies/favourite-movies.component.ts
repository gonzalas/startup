import { Component, OnInit } from "@angular/core";
import { MyMoviesService } from "../my-movies.service";

@Component({
  selector: "app-favourite-movies",
  templateUrl: "./favourite-movies.component.html",
  styleUrls: ["./favourite-movies.component.css"]
})
export class FavouriteMoviesComponent implements OnInit {
  favouriteMovies;

  constructor(private movieService: MyMoviesService) {}

  ngOnInit(): void {
    this.favouriteMovies = this.movieService.getMovies();
  }
}
