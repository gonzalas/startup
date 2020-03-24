import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [AppComponent, TopBarComponent, MovieListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
