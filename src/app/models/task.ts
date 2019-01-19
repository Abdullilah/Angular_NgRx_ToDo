import {DepartmentTitle} from './department';

export namespace Status {
  export type CodeEnum = 'Submitted' | 'In Progress' | 'Fixed';
}

export class Task {
  id: number;
  title: string;
  description: string;
  department: DepartmentTitle.CodeEnum;
  employeeID: number;
  status: Status.CodeEnum
}
