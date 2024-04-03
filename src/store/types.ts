import * as actionTypes from "./tasks";

export type Task = {
  id: number;
  task: string;
  completed: boolean;
};

export type State = Task[];

type ActionType =
  | typeof actionTypes.ADD_TASK
  | typeof actionTypes.REMOVE_TASK
  | typeof actionTypes.COMPLETE_TASK
  | typeof actionTypes.UPDATE_TASK;

export type Action = {
  type: ActionType;
  payload: { task?: string; id?: number };
};
