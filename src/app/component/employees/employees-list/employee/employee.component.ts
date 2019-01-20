import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Input() title: string;
  @Input() column: string;
  @Input() employees: Employee[];
  className: string;

  constructor() {
  }

  ngOnInit() {
    this.className = 'container__list__card--' + this.column;
  }

}
