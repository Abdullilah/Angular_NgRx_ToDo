import {Task} from '../models/task';

export const tasksMock: Task[] = [
  {
    id: 1,
    title: 'Title Color',
    description: 'We need to change the color of the title on Home page',
    department: 'Front-end',
    employeeID: 1,
    status: 'Submitted'
  },
  {
    id: 2,
    title: 'Font-size',
    description: 'Change the font-size on Contact page',
    department: 'Front-end',
    employeeID: 1,
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'Smaller images',
    description: 'Make the images on Gallery smaller',
    department: 'Front-end',
    employeeID: 4,
    status: 'In Progress'
  },
  {
    id: 4,
    title: 'Dispatch Action',
    description: 'Dispatch Action to change the state in the Store when the user click the button',
    department: 'Front-end',
    employeeID: 5,
    status: 'Fixed'
  },
  {
    id: 5,
    title: 'Clear the State',
    description: 'Clear the state of the store when the user click Reset Button',
    department: 'Front-end',
    employeeID: 7,
    status: 'Fixed'
  },
  {
    id: 6,
    title: 'Import Framework',
    description: 'Import the styling framework which can redesign the style for the application',
    department: 'Front-end',
    employeeID: 7,
    status: 'Submitted'
  },
  {
    id: 7,
    title: 'Horizontal Scroll bar',
    description: 'Add Horizontal Scroll bar to the main section for small screen',
    department: 'Front-end',
    employeeID: 7,
    status: 'In Progress'
  },
  {
    id: 8,
    title: 'Filter Users',
    description: 'Filter the users who have age more than 40',
    department: 'Back-end',
    employeeID: 2,
    status: 'Submitted'
  },
  {
    id: 9,
    title: 'Oldest Employee',
    description: 'Make endpoint which returns the information of the older employee in the company',
    department: 'Back-end',
    employeeID: 2,
    status: 'Submitted'
  },
  {
    id: 10,
    title: 'Youngest Employee',
    description: 'Make endpoint which returns the information of the youngest employee in the company',
    department: 'Back-end',
    employeeID: 9,
    status: 'In Progress'
  },
  {
    id: 11,
    title: 'Female Employees',
    description: 'Make endpoint which returns all female employees-list',
    department: 'Back-end',
    employeeID: 9,
    status: 'Submitted'
  },
  {
    id: 12,
    title: 'Male Employees',
    description: 'Make endpoint which returns all male employees-list',
    department: 'Back-end',
    employeeID: 9,
    status: 'Submitted'
  },
  {
    id: 13,
    title: 'Improve The Performance',
    description: 'Use different sorting Algorithm to improve the performance of the filter',
    department: 'Back-end',
    employeeID: 2,
    status: 'In Progress'
  },
  {
    id: 14,
    title: 'Submit The Form',
    description: 'Handle the data after submitting the form on Result page',
    department: 'Back-end',
    employeeID: 10,
    status: 'Fixed'
  },
  {
    id: 15,
    title: 'Add to The Database',
    description: 'Add the new user after submitting the form to the database',
    department: 'Back-end',
    employeeID: 10,
    status: 'Fixed'
  },
  {
    id: 16,
    title: 'Make an Interview',
    description: 'Make an interview with the new Node.js Developer to join our team',
    department: 'Back-end',
    employeeID: 2,
    status: 'In Progress'
  },
  {
    id: 17,
    title: 'Test Algorithm',
    description: 'Write the test to test the performance of the Algorithm with Big Date',
    department: 'Back-end',
    employeeID: 9,
    status: 'In Progress'
  },
  {
    id: 18,
    title: 'Make New Design',
    description: 'Make new design for the Login page',
    department: 'Designer',
    employeeID: 6,
    status: 'Fixed'
  },
  {
    id: 19,
    title: 'Make Icons',
    description: 'Design the new icons for the Home page',
    department: 'Designer',
    employeeID: 8,
    status: 'Submitted'
  },
  {
    id: 20,
    title: 'Change Colors',
    description: 'Change the colors of the previous design',
    department: 'Front-end',
    employeeID: 8,
    status: 'Submitted'
  },
];
