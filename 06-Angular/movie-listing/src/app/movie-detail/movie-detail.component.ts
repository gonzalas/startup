import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { movies } from "../movies";
import { MyMoviesService } from "../my-movies.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MyMoviesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movie = movies[+params.get("movieId")];
    });
  }

  addFavourite(movie) {
    this.movieService.addFavourite(movie);
  }
}
