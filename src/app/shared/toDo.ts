 import { TodoStatus } from "./TodoStatus ";
 export interface Todo {
    id: string;         
    title: string;         
    targetDate: Date;       
    status: TodoStatus;     
  }