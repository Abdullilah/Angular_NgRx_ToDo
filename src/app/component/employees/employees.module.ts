import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import {EmployeesComponent} from './employees-list/employees.component';
import { EmployeeComponent } from './employees-list/employee/employee.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeeComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
