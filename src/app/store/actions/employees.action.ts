import { Action } from '@ngrx/store';
import {Employee} from '../../models/employee';
import {Task} from '../../models/task';

export enum ActionTypes {
  Add_Employee = '[Employee] Add_Employee',
  Add_Employee_Task = '[Employee] Add_Employee_Task',
  Delete_Employee_Task = '[Employee] Delete_Employee_Task'
}

export class AddEmployee implements Action {
  readonly type = ActionTypes.Add_Employee;
  constructor(public payload: Employee) {}
}

export class AddEmployeeTask implements Action {
  readonly type = ActionTypes.Add_Employee_Task;
  constructor(public payload: Task) {}
}

export class DeleteEmployeeTasks implements Action {
  readonly type = ActionTypes.Delete_Employee_Task;
  constructor(public payload: Task) {}
}

export type EmployeeActions = AddEmployee | AddEmployeeTask | DeleteEmployeeTasks;
