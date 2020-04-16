import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import * as TodoActions from '../actions/todo.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {
  todos: Observable<Todo[]>;
  index: number;

  constructor(private store: Store<AppState>, private router: Router) {
    this.todos = store.select('todo');
  }

  ngOnInit() {
  }

  delTodo(index) {
    this.store.dispatch(new TodoActions.RemoveTodo(index) );
    this.router.navigate(['']);
  }

}
