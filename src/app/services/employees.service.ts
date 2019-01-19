import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Employee} from '../models/employee';
import {employeesMock} from '../mock-data/employees-mock';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() {
  }

  getAllEmployees$(): Observable<Employee[]> {
    return of(employeesMock);
  }
}
