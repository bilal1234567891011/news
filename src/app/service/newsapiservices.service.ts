import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

//topheading
   topHeading(){
    return this._http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1c5e2237fcd342bf86e1cc62c9d23654')
   }

   //tech news
   techNews(){
    return this._http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654')
   }

   //business news
   businessNews(){
    return this._http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654')
   }

   //sports news
   sportsNews(){
   return this._http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654')
   }
}
