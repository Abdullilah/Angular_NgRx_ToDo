import {Component, OnInit} from '@angular/core';
import {Status, Task} from '../../../models/task';
import {TasksService} from '../../../services/tasks.service';
import {DepartmentTitle} from '../../../models/department';
import {Employee} from '../../../models/employee';

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

  addTask(e, title, description, department, employee: Employee): void {
    e.preventDefault();
    const newTask: Task = {
      id: Math.random(),
      title: title.value,
      description: description.value,
      department: department.value,
      status: 'Submitted',
      employeeID: employee.id
    };
    console.log(newTask);
  }
}
