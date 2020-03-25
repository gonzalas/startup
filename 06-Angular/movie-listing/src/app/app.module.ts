import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { FavouriteMoviesComponent } from "./favourite-movies/favourite-movies.component";
import { MyMoviesService } from "./my-movies.service";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MovieListComponent,
    MovieDetailComponent,
    FavouriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: MovieListComponent },
      { path: "movies/:movieId", component: MovieDetailComponent },
      { path: "favourite-movies", component: FavouriteMoviesComponent }
    ])
  ],
  providers: [MyMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
