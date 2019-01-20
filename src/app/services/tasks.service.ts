import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Status, Task} from '../models/task';
import {Store, select} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {AddTask, DeleteTask, EditTask} from '../store/actions/tasks.actions';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private store: Store<AppState>) { }

  getAllTasks$(): Observable<Task[]> {
    return this.store.pipe(select('tasks'));
  }

  addNewTask(task: Task): void {
    this.store.dispatch(new AddTask(task));
  }

  editTask(id: number, status: Status.CodeEnum): void {
    this.store.dispatch(new EditTask({id: id, status: status}));
  }

  deleteTask(id: number): void {
    this.store.dispatch(new DeleteTask(id));
  }
}
