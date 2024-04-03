import { Action, State } from "./types";

// action types
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

// actions
export const addTask = (task: string): Action => {
  return { type: ADD_TASK, payload: { task } };
};

export const removeTask = (id: number): Action => {
  return { type: REMOVE_TASK, payload: { id } };
};

export const completeTask = (id: number): Action => {
  return { type: COMPLETE_TASK, payload: { id } };
};

export const updateTask = (id: number, newTask: string): Action => {
  return { type: UPDATE_TASK, payload: { id, task: newTask } };
};

// reducer
let id = 0;

const reducer = (state: State = [], action: Action): State => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: id++,
          task: action.payload.task,
          completed: false,
        },
      ];

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true,
            }
          : task
      );

    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              task: action.payload.task,
            }
          : task
      );

    default:
      return state;
  }
};

export default reducer;
