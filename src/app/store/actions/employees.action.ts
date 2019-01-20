import { Action } from '@ngrx/store';
import {Employee} from '../../models/employee';

export enum ActionTypes {
  Add_Employee = '[Employee] Add_Employee'
}

export class AddEmployee implements Action {
  readonly type = ActionTypes.Add_Employee;
  constructor(public payload: Employee) {}
}

export type EmployeeActions = AddEmployee;
