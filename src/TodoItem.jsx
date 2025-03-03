import React from "react";

export default class TodoItem extends React.Component {


  render() {
    const { id, name, complete, onAddLine} = this.props;
    return (
      <li key={id} className="todo-item">
        <p className={complete ? "todo-item__complete" : ""}>
          <input type="checkbox" checked={complete} onChange={() => {onAddLine(id)}}/>
          {name}
        </p>
      </li>
    );
  }
}
