import {DepartmentTitle} from './department';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: DepartmentTitle.CodeEnum;
  tasksIDs: number[];
}
