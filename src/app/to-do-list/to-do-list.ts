import { Component } from '@angular/core';
import { Todo } from '../shared/toDo';
import { TodoStatus } from '../shared/TodoStatus ';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
})
export class ToDoList {
todos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: "ללמוד אנגולר",
    targetDate: new Date(2026, 1, 20),
    status: TodoStatus.NotDone
  },
  {
    id: crypto.randomUUID(),
    title: "להגיש תרגיל",
    targetDate: new Date(2026, 1, 10),
    status: TodoStatus.InProgress
  },
  {
    id: crypto.randomUUID(),
    title: "לסדר חדר",
    targetDate: new Date(2026, 1, 5),
    status: TodoStatus.Done
  }
];

isLeft(d:Date){
  return Date.now()<Number(d)    
}
setStatus(t:Todo,s:TodoStatus)
{
  t.status=s
}
}
