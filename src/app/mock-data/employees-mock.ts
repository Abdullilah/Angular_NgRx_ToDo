import {Employee} from '../models/employee';

export const employeesMock: Employee[] = [
  {
    id: 1,
    firstName: 'Agnieszka',
    lastName: 'Kamińska',
    department: 'Front-end',
    tasksIDs: [1, 2]
  },
  {
    id: 2,
    firstName: 'Dawid',
    lastName: 'Zieliński',
    department: 'Back-end',
    tasksIDs: [8, 9, 13, 16]
  },
  {
    id: 3,
    firstName: 'Dominik',
    lastName: 'Jankowski',
    department: 'Back-end',
    tasksIDs: []
  },
  {
    id: 4,
    firstName: 'Jakub',
    lastName: 'Wojciechowski',
    department: 'Front-end',
    tasksIDs: [3]
  },
  {
    id: 5,
    firstName: 'Zuzanna',
    lastName: 'Nowak',
    department: 'Front-end',
    tasksIDs: [4]
  },
  {
    id: 6,
    firstName: 'Marcin',
    lastName: 'Wójcik',
    department: 'Designer',
    tasksIDs: [18]
  },
  {
    id: 7,
    firstName: 'Michał',
    lastName: 'Wesołowski',
    department: 'Front-end',
    tasksIDs: [5, 6, 7]
  },
  {
    id: 8,
    firstName: 'Paweł',
    lastName: 'Szymański',
    department: 'Designer',
    tasksIDs: [19, 20]
  },
  {
    id: 9,
    firstName: 'Piotr',
    lastName: 'Zając',
    department: 'Back-end',
    tasksIDs: [10, 11, 12, 17]
  },
  {
    id: 10,
    firstName: 'Tomasz',
    lastName: 'Mazur',
    department: 'Back-end',
    tasksIDs: [14, 15]
  }
];
