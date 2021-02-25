import { FetchTodosAction, DeleteTodoAction } from "./todos.actions";

export enum ActionTypes {
  FetchTodos,
  DeleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
