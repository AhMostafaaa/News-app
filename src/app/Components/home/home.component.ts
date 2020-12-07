import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsContainer = [];
  countries:object[] = 
  [
    {country:'Egypt',code:'eg'},
    {country:'United Status',code:'us'},
    {country:'France',code:'fr'},
    {country:'Italy',code:'it'},
    {country:'Germany',code:'de'},
    {country:'Saudi Arabia' , code:'sa'}
  ]
  currentCountry:string ="eg";
  constructor(public _NewsService:NewsService) {
    _NewsService.getNews(this.currentCountry).subscribe(data => this.newsContainer = data.articles);
    
   }

  ngOnInit(): void {}
  getCode(c){
    this.currentCountry = c;
    this._NewsService.getNews(this.currentCountry).subscribe(data => this.newsContainer = data.articles)
   }
}
