import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: "Learn React",
          complete: true,
        },
        {
          id: 2,
          name: "Learn Redux",
          complete: false,
        },
        {
          id: 3,
          name: "Learn React Native",
          complete: false,
        },
      ],
    };
  }

  addNewTodo(name) {
    this.setState((previousState) => {
      return {
        todos: [
          ...previousState.todos,
          {
            id: Number(new Date()),
            name: name,
            complete: false,
          },
        ],
      };
    });
  }

  addNewLine(id) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => 
          todo.id === id ? {...todo, complete: !todo.complete} : todo
        ),

      }
    });
  }

  render() {
    return (
      <main>
        <TodoInput
          onAdd={(name) => {
            this.addNewTodo(name);
          }}
        ></TodoInput>
        <TodoList todos={this.state.todos} onAddLine={(id) => {this.addNewLine(id)}}></TodoList>
      </main>
    );
  }
}
