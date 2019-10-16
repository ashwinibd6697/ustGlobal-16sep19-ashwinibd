import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getMovies(m) {
    this.http.get<any>('http://www.omdbapi.com/?apikey=db079894&s=' + m.target.value).subscribe(data => {
      this.movies = data.articles;
      console.log(data);
    });
  }
}
