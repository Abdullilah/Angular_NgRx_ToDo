import {Component, Input, OnInit} from '@angular/core';
import {Status, Task} from '../../../../models/task';
import {TasksService} from '../../../../services/tasks.service';

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

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.className = 'container__list__card--' + this.column;
  }

  deleteTask(task: Task): void {
    this.tasksService.deleteTask(task.id);
  }

  editTask(id: number, status: Status.CodeEnum): void {
    this.tasksService.editTask(id, status);
  }

}
