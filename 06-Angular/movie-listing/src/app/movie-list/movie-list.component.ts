import { Component, OnInit } from "@angular/core";
import { movies } from "../movies";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies = movies;

  constructor() {}

  ngOnInit(): void {}
}
