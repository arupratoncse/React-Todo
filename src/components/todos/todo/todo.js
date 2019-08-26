import React, {Component} from 'react';
import './todo.css'


class Todo extends Component{
    deleteHandler(event, id){
        event.stopPropagation()
        this.props.deleteTodo(id)
    }
    updateHandler(todo){
        const updateTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        }
        this.props.isCompleted(updateTodo)
    }
    render() {
        return(
            <div className={this.props.todo.completed? 'is-complete': 'todo' }
                 onClick={event => this.updateHandler(this.props.todo)}
            >
                {this.props.todo.title}
                <i className="fas fa-trash-alt"
                   onClick={event => this.deleteHandler(event, this.props.todo.id)}
                ></i>
            </div>
        )
    }
}

export default Todo
