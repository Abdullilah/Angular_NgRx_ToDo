import {employeesMock} from '../../mock-data/employees-mock';
import {ActionTypes, EmployeeActions} from '../actions/employees.action';
import {Employee} from '../../models/employee';

export const initialState: Employee[] = employeesMock;

export function employeesReducer(state = initialState, action: EmployeeActions) {

  switch (action.type) {
    case ActionTypes.Add_Employee:
      return [...state, action.payload];
    default:
      return state;
  }

}
