import * as actionTypes from "./actionTypes";
import { Action, State } from "./types";

let id = 0;

const reducer = (state: State = [], action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: id++,
          task: action.payload.task,
          completed: false,
        },
      ];

    case actionTypes.REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
