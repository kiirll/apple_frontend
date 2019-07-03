import { Injectable } from '@angular/core';
import { ToDo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private TaskService: TaskService) { }

  getTasks() : ToDo[] {
    return [
      {id: 1, title: 'Яблоки', completed:false, date: new Date()},
      {id: 2, title: 'Кунжут', completed:true, date: new Date()},
      {id: 3, title: 'Греча', completed:false, date: new Date()},
    ];
  }
  ngOnInit() {

  }

}
