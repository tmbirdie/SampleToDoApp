import { Component } from '@angular/core';
import { MdCard, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './material2-app-theme.scss']
})
export class AppComponent {
  title = 'ToDo List';
  todo = new Todo();

newTodo: string;
    todos: any;
    todoObj: any;

    constructor() {
      this.newTodo = '';
      this.todos = [];
    }
    buttonState(){
      return !this.todos.some(item => item.completed);
    }

    getAllTodos()
    {
      return this.todo;
    }

    addTodo(event) {
      this.todoObj = {
        newTodo: this.newTodo,
        completed: false
      };
      this.todos.push(this.todoObj);
      this.newTodo = '';
      event.preventDefault();
    }


    deleteSelectedTodos() {
      for (let i = (this.todos.length - 1); i > -1; i--) {
        if (this.todos[i].completed) {
          this.todos.splice(i, 1);
        }
      }
    }

}
