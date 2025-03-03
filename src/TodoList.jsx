import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              name={todo.name}
              complete={todo.complete}
              onAddLine={this.props.onAddLine}
            ></TodoItem>
          );
        })}
      </ul>
    );
  }
}
