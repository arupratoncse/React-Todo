import React, {Component} from 'react';
import './App.css';
import Todos from './todos/todos.js'
import AddTodo from './addTodo/addTodo'
import FilterTodo from './filterTodo/filterTodo'
import axios from 'axios'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos:[]
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
          this.setState({
            todos: res.data
          })
        })
        .catch((error) =>{
          console.log(error)
        })
  }
  completedHandeler(updTodo){
    let updateTodos = this.state.todos.map(todo => {
        if(todo.id === updTodo.id){
          return(
              updTodo
          )
        }
        return todo
      })
      this.setState({
        todos: updateTodos
      })
    /**
     * if database request
     axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
     */
  }
  deleteHandler(id){
    let updTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: updTodos
    })
    /**
     * if database request
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
     */
  }
  addTodo(title){
      axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
          .then(res => {
            this.setState({
                todos: [res.data].concat(this.state.todos)
            })
          })
          .catch(error => console.log(error))
  }
  filterTodo(event){
      const limit = parseInt(event.target.value)
      axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
          .then(res => {
              this.setState({
                  todos: res.data
              })
          })
          .catch(error => console.log(error))
  }
  render() {
    let {todos} = this.state
    return (
        <div className="container">
            <AddTodo addTodo={this.addTodo.bind(this)}/>
            <FilterTodo filterTodo={this.filterTodo.bind(this)}/>
            <Todos todos={todos}
                   isCompleted={this.completedHandeler.bind(this)}
                   deleteTodo={this.deleteHandler.bind(this)}
            />
        </div>
    )
  }
}

export default App;
