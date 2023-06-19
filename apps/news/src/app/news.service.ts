import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  
  constructor(private http : HttpClient){}

  gets() : Observable<any>{
      return this.http.get('http://localhost:4203/assets/data.json')
  }
}
