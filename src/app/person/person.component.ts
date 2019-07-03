import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Person } from '../app.component';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.styl']
})


export class PersonComponent implements OnInit {

  constructor(private hello : HelloService) { }
  person = {};
  ngOnInit() {
    this.hello.getPerson().subscribe((data:Person)=>{
      this.person = data
    });
  }

}
