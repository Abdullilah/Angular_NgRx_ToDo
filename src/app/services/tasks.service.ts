import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Task} from '../models/task';
import {tasksMock} from '../mock-data/tasks-mock';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getAllTasks$(): Observable<Task[]> {
    return of(tasksMock);
  }
}
