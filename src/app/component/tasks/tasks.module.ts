import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import {TasksComponent} from './tasks-list/tasks.component';
import { TaskComponent } from './tasks-list/task/task.component';

@NgModule({
  declarations: [TasksComponent, TaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
