import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './app.component';
import { Observable, Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:4000'
  getPerson () : Observable<any> {
    return this.http.get(this.configUrl)
  }

}
