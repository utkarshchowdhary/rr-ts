import { Todo, TodosActionTypes, TodosActions } from "../actions";

export interface TodosState {
  isFetching: boolean;
  todos: Todo[];
}

const INITIAL_STATE: TodosState = {
  isFetching: false,
  todos: [],
};

export const todosReducer = (
  state = INITIAL_STATE,
  action: TodosActions
): TodosState => {
  switch (action.type) {
    case TodosActionTypes.FetchTodosStart:
      return { ...state, isFetching: true };
    case TodosActionTypes.FetchTodosSuccess:
      return { ...state, isFetching: false, todos: action.payload };
    case TodosActionTypes.DeleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
      };
    case TodosActionTypes.ClearTodos:
      return { ...state, todos: [] };
    default:
      return state;
  }
};
