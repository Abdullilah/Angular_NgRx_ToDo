import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {Task} from '../models/task';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store/app.state';
import {AddEmployee, AddEmployeeTask, DeleteEmployeeTasks} from '../store/actions/employees.action';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private store: Store<AppState>) {
  }

  getAllEmployees$(): Observable<Employee[]> {
    return this.store.pipe(select('employees'));
  }

  addEmployee(newEmployee: Employee): void {
    this.store.dispatch(new AddEmployee(newEmployee));
  }

  addEmployeeTasks(newTask: Task): void {
    this.store.dispatch(new AddEmployeeTask(newTask));
  }

  deleteEmployeeTask(deletedTask: Task): void {
    this.store.dispatch(new DeleteEmployeeTasks(deletedTask));
  }

}
