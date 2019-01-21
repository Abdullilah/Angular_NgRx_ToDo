import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../../../models/task';
import {TasksService} from '../../../services/tasks.service';
import {Observable} from 'rxjs';
import {EmployeesService} from '../../../services/employees.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {

  allTasks$: Observable<Task[]>;
  submittedTasks: Task[];
  inProgressTasks: Task[];
  fixedTasks: Task[];

  constructor(private tasksService: TasksService, private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.allTasks$ = this.tasksService.getAllTasks$();
    this.allTasks$.subscribe(tasks => {
      this.submittedTasks = [];
      this.inProgressTasks = [];
      this.fixedTasks = [];
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
    });
  }

  addTask(e, title, description, department, employeeID): void {
    e.preventDefault();
    const newTask: Task = {
      id: Math.round(Math.random()*1000),
      title: title,
      description: description,
      department: department,
      status: 'Submitted',
      employeeID: parseInt(employeeID, 10)
    };
    this.tasksService.addNewTask(newTask);
    this.employeesService.addEmployeeTasks(newTask);
  }

  get getAllEmployees$(): Observable<Employee[]> {
    return this.employeesService.getAllEmployees$();
  }

  ngOnDestroy() {
    this.allTasks$.subscribe();
  }

}
