import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMain } from './todo-main';

describe('TodoMain', () => {
  let component: TodoMain;
  let fixture: ComponentFixture<TodoMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
