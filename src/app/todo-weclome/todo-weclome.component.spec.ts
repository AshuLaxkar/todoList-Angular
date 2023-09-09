import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoWeclomeComponent } from './todo-weclome.component';

describe('TodoWeclomeComponent', () => {
  let component: TodoWeclomeComponent;
  let fixture: ComponentFixture<TodoWeclomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoWeclomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWeclomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
