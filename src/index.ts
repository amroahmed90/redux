import { addTask, removeTask } from "./actions";
import store from "./store";

store.dispatch(addTask("Learn Redux"));
store.dispatch(addTask("Learn TS"));

console.log(store.getState());

store.dispatch(removeTask(1));
console.log(store.getState());
