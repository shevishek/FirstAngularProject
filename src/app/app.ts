import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Id } from './id/id';
import { ToDoList } from './to-do-list/to-do-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToDoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project1');
}
