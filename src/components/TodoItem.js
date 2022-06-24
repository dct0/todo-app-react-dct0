import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      completed: false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  render() {
    return (
      <div className="todo-item">
        {
          this.state.completed ?
            <s><li className="todo-text" onClick={this.handleDelete}>{this.props.value}</li></s> :
            <li className="todo-text" onClick={this.handleDelete}>{this.props.value}</li>
        }
        <input type="checkbox" checked={this.state.completed} onChange={this.toggleCompleted}/>
      </div>
      
    )
  }

  handleDelete(event) {
    this.props.onClick(this.state.id);
    event.preventDefault();
  }

  toggleCompleted() {
    this.setState({ completed: !this.state.completed });
  }
}

export default TodoItem;