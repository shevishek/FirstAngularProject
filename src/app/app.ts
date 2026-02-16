import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Id } from './id/id';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Id],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project1');
}
