import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeesService} from '../../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  frontendEmployees: Employee[] = [];
  backendEmployees: Employee[] = [];
  designerEmployees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employeesService.getAllEmployees$().subscribe(employees => {
      employees.map(employee => {
        switch (employee.department) {
          case 'Front-end':
            this.frontendEmployees.push(employee);
            break;
          case 'Back-end':
            this.backendEmployees.push(employee);
            break;
          case 'Designer':
            this.designerEmployees.push(employee);

        }
      });
    })
  }

}
