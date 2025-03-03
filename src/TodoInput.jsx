import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      value: "",
    };
  }

  onChangeInput(event) {
    this.setState(() => {
      return {
        value: event.target.value,
      };
    });
  }
  render() {
    return (
      <div className="todo-input">
        <input
          type="text"
          value={this.state.value}
          onChange={(event) => {
            this.onChangeInput(event);
          }}
        />
        <button
          onClick={() => {this.props.onAdd(this.state.value);}}>Tambah</button>
      </div>
    );
  }
}
