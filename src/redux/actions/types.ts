import {
  FetchTodosStartAction,
  FetchTodosSuccessAction,
  DeleteTodoAction,
  ClearTodosAction,
} from "./todos.actions";

export enum TodosActionTypes {
  FetchTodosStart,
  FetchTodosSuccess,
  DeleteTodo,
  ClearTodos,
}

export type TodosActions =
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | DeleteTodoAction
  | ClearTodosAction;
