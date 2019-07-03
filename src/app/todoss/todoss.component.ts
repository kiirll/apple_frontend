import { Component, OnInit, Input } from '@angular/core';
import {TaskService} from '../task.service';
@Component({
  selector: 'app-todoss',
  templateUrl: './todoss.component.html',
  styleUrls: ['./todoss.component.styl']
})
export class TodossComponent implements OnInit {
  
  constructor(private TodoService: TaskService) { }
  private todos = [];
  ngOnInit() {
    this.todos = this.TodoService.getTasks();
  }

}
