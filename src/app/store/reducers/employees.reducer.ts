import {employeesMock} from '../../mock-data/employees-mock';
import {ActionTypes, EmployeeActions} from '../actions/employees.action';
import {Employee} from '../../models/employee';

export const initialState: Employee[] = employeesMock;

export function employeesReducer(state = initialState, action: EmployeeActions) {

  switch (action.type) {
    case ActionTypes.Add_Employee:
      return [...state, action.payload];
    case ActionTypes.Add_Employee_Task:
      state.map((employee, index) => {
        if (employee.id === action.payload.employeeID) {
          state[index] = {
            ...state[index],
            tasksIDs: [...state[index].tasksIDs, action.payload.id]
          };
        }
      });
      return [...state];
    case ActionTypes.Delete_Employee_Task:
      state.map((employee, index) => {
        if (employee.id === action.payload.employeeID) {
          state[index] = {
            ...state[index],
            tasksIDs: state[index].tasksIDs.filter(id => id !== action.payload.id)
          };
        }
      });
      return [...state];
    default:
      return state;
  }

}
