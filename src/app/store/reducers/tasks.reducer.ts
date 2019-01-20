import {ActionTypes, TaskActions} from '../actions/tasks.actions';
import {tasksMock} from '../../mock-data/tasks-mock';
import {Task} from '../../models/task';

export const initialState: Task[] = tasksMock;

export function tasksReducer(state = initialState, action: TaskActions) {

  switch (action.type) {
    case ActionTypes.Add_Task:
      return [...state, action.payload];

    case ActionTypes.Delete_Task:
      const tasks = state;
      state.map((task, index) => {
        if (task.id === action.payload) {
          tasks.splice(index, 1);
        }
      });
      return [...tasks];

    case ActionTypes.Edit_Task:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
}
