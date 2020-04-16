import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import * as TodoActions from '../actions/todo.actions';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {

  todoID: number;
  todos: Observable<Todo[]>;
  todoEdit: Todo;

  constructor(private actRoute: ActivatedRoute, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.todos = this.store.select('todo');
    this.todoID = +this.actRoute.snapshot.paramMap.get('id');
    this.todos.subscribe(val => {
      this.todoEdit = val[this.todoID];
    });
  }

  save(ttl, cmpltd) {
    this.store.dispatch(new TodoActions.UpdateTodo({title: ttl, completed: cmpltd}, this.todoID));
    this.router.navigate(['']);
  }
}
