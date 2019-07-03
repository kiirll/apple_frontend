import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TodossComponent } from './todoss/todoss.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { AlertModule } from 'ngx-bootstrap';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '',
    pathMatch: 'full',
    children:[]
  },
  {
    path: 'person',
    component: PersonComponent,
    children: [
      {
        path: "kirill",
        component: TodossComponent
      }

    ]
  },
  {
    path: 'todo',
    component: TodossComponent
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodossComponent,
    PersonComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
