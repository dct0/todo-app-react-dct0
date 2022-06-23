import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: '',
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="App-header">
            <h1>Simple Todo App</h1>
          </header>
          <div className="App-content">
            <div className="App-todo-list">
              <ul>
                {this.state.list}
              </ul>
            </div>
            <div className="App-todo-add">
              <TodoForm list={this.state.list} value={this.state.value} onAdd={this.handleAdd} onChange={this.handleChange}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleAdd() {
    const value = this.state.value.trim();
    if (!value) return;
    let list = [...this.state.list];
    const d = Date.now();
    list[list.length] = <TodoItem key={d} id={d} value={value} onClick={this.handleDelete}/>;
    this.setState({ list: list, value: '' });
  }

  handleChange(value) {
    this.setState({ value: value });
  }

  handleDelete(id) {
    const list = this.state.list.filter((todo) => {
      return todo.props.id !== id;
    });

    this.setState({ list: list });
  }
}

export default App;
