import {ActionTypes, TaskActions} from '../actions/tasks.actions';
import {tasksMock} from '../../mock-data/tasks-mock';
import {Task} from '../../models/task';

export const initialState: Task[] = tasksMock;

export function tasksReducer(state = initialState, action: TaskActions) {

  switch (action.type) {
    case ActionTypes.Add_Task:
      return [...state, action.payload];

    case ActionTypes.Delete_Task:
      state.map((task, index) => {
        if (task.id === action.payload) {
          state.splice(index, 1);
        }
      });
      return [...state];

    case ActionTypes.Edit_Task:
      state.map((task, index) => {
        if (task.id === action.payload.id) {
          state[index] = {
            ...state[index],
            status: action.payload.status
          };
        }
      });
      return [...state];

    default:
      return state;
  }
}
