import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMangaComponent } from './search-manga/search-manga.component';
import { MangaComponent } from './manga/manga.component';

const routes: Routes = [
  { path: 'manga/:id', component: MangaComponent },
  { path: 'search', component: SearchMangaComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
