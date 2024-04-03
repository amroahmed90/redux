import { addTask, removeTask } from "./actions";
import store from "./store";

// subscribe method runs whenever the store state is updated
// the subscribe method returns an unsubscribe function to be called later
// when we want to stop running the subscribe function everytime an update happens
const unsubscribe = store.subscribe(() => {
  console.log("Updated!", store.getState());
});

store.dispatch(addTask("Learn Redux")); // subscribe: updated with 1 task
store.dispatch(addTask("Learn TS")); // subscribe: updated with 2 tasks 

unsubscribe() // no console log after removing a task 

// console.log(store.getState());

store.dispatch(removeTask(1)); // subscribe: updated with a task removed
// console.log(store.getState());
