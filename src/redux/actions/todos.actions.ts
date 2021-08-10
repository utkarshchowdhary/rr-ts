import axios from "axios";
import { Dispatch } from "redux";
import { TodosActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
}

export interface FetchTodosSuccessAction {
  type: TodosActionTypes.FetchTodosSuccess;
  payload: Todo[];
}

export interface FetchTodosStartAction {
  type: TodosActionTypes.FetchTodosStart;
}

export interface DeleteTodoAction {
  type: TodosActionTypes.DeleteTodo;
  payload: number;
}

export interface ClearTodosAction {
  type: TodosActionTypes.ClearTodos;
}

export const fetchTodosStart = (): FetchTodosStartAction => {
  return {
    type: TodosActionTypes.FetchTodosStart,
  };
};

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchTodosStartAction>(fetchTodosStart());

    const response = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch<FetchTodosSuccessAction>({
      type: TodosActionTypes.FetchTodosSuccess,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: TodosActionTypes.DeleteTodo,
    payload: id,
  };
};

export const clearTodos = (): ClearTodosAction => {
  return {
    type: TodosActionTypes.ClearTodos,
  };
};
