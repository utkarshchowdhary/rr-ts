import { combineReducers } from "redux";
import { TodosState, todosReducer } from "./todos.reducer";

export interface StoreState {
  todos: TodosState;
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
