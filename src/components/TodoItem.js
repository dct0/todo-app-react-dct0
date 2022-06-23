import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            completed: false,
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <li onClick={this.handleDelete}>{this.props.value}</li>
        )
    }

    handleDelete(event) {
        this.props.onClick(this.state.id);
        event.preventDefault();
    }
}

export default TodoItem;