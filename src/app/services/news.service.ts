import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _http:HttpClient) { }
  getNews(c):Observable<any>
  {
   return this._http.get(`http://newsapi.org/v2/top-headlines?country=${c}&apiKey=10109dca40ea4bf7bca08305f2b8a1d8`);
 }
}
