import { addTask, removeTask } from "./actions";
import store from "./store";

// subscribe method runs whenever the store state is updated
store.subscribe(() => {
  console.log("Updated!", store.getState());
});

store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn TS"));

// console.log(store.getState());

store.dispatch(removeTask(1));
// console.log(store.getState());
