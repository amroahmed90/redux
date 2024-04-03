import { addTask, completeTask, removeTask } from "./actions";
import store from "./store";

// subscribe method runs whenever the store state is updated
// the subscribe method returns an unsubscribe function to be called later
// when we want to stop running the subscribe function everytime an update happens
const unsubscribe = store.subscribe(() => {
  console.log("Updated!", store.getState());
});

// add tasks
store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn TS"));

// complete task #1
store.dispatch(completeTask(1));

// remove task #1
store.dispatch(removeTask(1));
