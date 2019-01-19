import {Component, OnInit} from '@angular/core';
import {Task} from '../../../models/task';
import {TasksService} from '../../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  submittedTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  fixedTasks: Task[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasksService.getAllTasks$().subscribe(tasks => {
      tasks.map(task => {
        switch (task.status) {
          case 'Submitted':
            this.submittedTasks.push(task);
            break;
          case 'In Progress':
            this.inProgressTasks.push(task);
            break;
          case 'Fixed':
            this.fixedTasks.push(task);

        }
      });
    })
  }
}
