import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodossComponent } from './todoss.component';

describe('TodossComponent', () => {
  let component: TodossComponent;
  let fixture: ComponentFixture<TodossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
