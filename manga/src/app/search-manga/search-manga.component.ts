import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-manga',
  templateUrl: './search-manga.component.html',
  styleUrls: ['./search-manga.component.css']
})
export class SearchMangaComponent implements OnInit {

  query: string;
  obsTrack: Observable<Object>;
  results: any;

  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.api.searchManga(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

}
