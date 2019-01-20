import { Action } from '@ngrx/store';
import {Status, Task} from '../../models/task';

export enum ActionTypes {
  Add_Task = '[Task] Add_Task',
  Delete_Task = '[Task] Delete_Task',
  Edit_Task = '[Task] Edit_Task',
}

export class AddTask implements Action {
  readonly type = ActionTypes.Add_Task;
  constructor(public payload: Task) {}
}

export class DeleteTask implements Action {
  readonly type = ActionTypes.Delete_Task;

  constructor(public payload: number) {}
}

export class EditTask implements Action {
  readonly type = ActionTypes.Edit_Task;

  constructor(public payload: {id: number, status: Status.CodeEnum}) {}
}

export type TaskActions = AddTask | DeleteTask | EditTask;
