import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() title: string;
  @Input() column: string;
  @Input() tasks: Task[];
  className: string;
  constructor() { }

  ngOnInit() {
    this.className = 'container__list__card--' + this.column;
  }

  deleteTask(task: Task): void {
    console.log(task);
  }

}
