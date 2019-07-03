import { Component } from '@angular/core';

export interface ToDo {
  id:number
  title: string
  completed:boolean
  date?: any
}
export interface Person {
  name: string
  surname: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent {
  title = 'my-dream-appl';
  allo = 'hello world';
}
