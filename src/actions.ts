import { Action } from "./types";
import * as actionTypes from "./actionTypes";

export const addTask = (task: string): Action => {
  return { type: actionTypes.ADD_TASK, payload: { task } };
};

export const removeTask = (id: number): Action => {
  return { type: actionTypes.REMOVE_TASK, payload: { id } };
};

export const completeTask = (id: number): Action => {
  return { type: actionTypes.COMPLETE_TASK, payload: { id } };
};

export const updateTask = (id: number, newTask: string): Action => {
  return { type: actionTypes.UPDATE_TASK, payload: { id, task: newTask } };
};