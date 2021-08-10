import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo, clearTodos } from "../redux/actions";
import { StoreState } from "../redux/reducers";
import { TodosState } from "../redux/reducers/todos.reducer";

interface AppProps extends TodosState {
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  clearTodos: typeof clearTodos;
}

class _App extends React.Component<AppProps> {
  handleFetch = (): void => {
    this.props.fetchTodos();
  };

  handleClear = (): void => {
    this.props.clearTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
        {todo.title}
      </div>
    ));
  }

  render() {
    return (
      <div>
        {!this.props.todos.length ? (
          <button onClick={this.handleFetch}>Fetch</button>
        ) : (
          <button onClick={this.handleClear}>Clear</button>
        )}
        {this.props.isFetching && <div>LOADING...</div>}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({
  todos: { isFetching, todos },
}: StoreState): TodosState => {
  return { isFetching, todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
  clearTodos,
})(_App);
