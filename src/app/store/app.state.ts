import {Employee} from '../models/employee';
import {Task} from '../models/task';

export interface AppState {
  readonly tasks: Task[];
  readonly employees: Employee[];
}
