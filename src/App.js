import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: '',
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
                {this.renderList()} 
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

  renderList() {
    return (
      this.state.list.map((l, i) => {
        return <li key={i}>{l}</li>;
      })
    );
  }

  handleAdd() {
    const value = this.state.value.trim();
    if (!value) return;
    let list = [...this.state.list];
    list[list.length] = value;
    this.setState({ list: list, value: '' });
  }

  handleChange(value) {
    this.setState({ value: value });
  }
}

export default App;
