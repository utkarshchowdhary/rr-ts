import {
  FetchTodosStartAction,
  FetchTodosSuccessAction,
  DeleteTodoAction,
  ClearTodosAction,
} from "./todos.actions";

export enum TodosActionTypes {
  FetchTodosStart = "FETCH_TODOS_START",
  FetchTodosSuccess = "FETCH_TODOS_SUCCESS",
  DeleteTodo = "DELETE_TODO",
  ClearTodos = "CLEAR_TODOS",
}

export type TodosActions =
  | FetchTodosStartAction
  | FetchTodosSuccessAction
  | DeleteTodoAction
  | ClearTodosAction;
