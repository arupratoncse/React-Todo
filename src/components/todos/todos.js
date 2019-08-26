import React, {Component} from 'react';
import './todos.css'
import Todo from './todo/todo'

class Todos extends Component{
    render() {
        return(
            <div>
                <h3>Todos</h3>
                <div className="legend">
                  <span>click to mark as complete</span>
                  <span>
                    <span className="incomplete-box"></span> = Incomplete
                  </span>
                  <span>
                    <span className="complete-box"></span> = Complete
                  </span>
                </div>
                <div className="todos">
                    {this.props.todos.map(todo => {
                        return(
                            <Todo todo={ todo }
                                  key={todo.id}
                                  isCompleted={this.props.isCompleted}
                                  deleteTodo={this.props.deleteTodo}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Todos
