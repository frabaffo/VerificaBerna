import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { SearchMangaComponent } from './search-manga/search-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent,
    SearchMangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
