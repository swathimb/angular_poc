import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Todo } from '../models/todo';
import * as TodoActions from '../actions/todo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  editTodo: Todo = {
    title: '',
    completed: ''
  };
  constructor(private store: Store<AppState>) {
  }

  addTodo(ttl, cmpltd) {
    this.editTodo.title = '';
    this.editTodo.completed = '';
    this.store.dispatch(new TodoActions.AddTodo({title: ttl, completed: cmpltd}) );
  }

  ngOnInit() {
  }

}
