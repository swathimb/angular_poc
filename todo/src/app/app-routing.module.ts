import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'update/:id', component: UpdateTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
