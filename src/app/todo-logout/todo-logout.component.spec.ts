import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLogoutComponent } from './todo-logout.component';

describe('TodoLogoutComponent', () => {
  let component: TodoLogoutComponent;
  let fixture: ComponentFixture<TodoLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
