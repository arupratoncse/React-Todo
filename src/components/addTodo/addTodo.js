import React, {Component} from 'react'
import './addTodo.css'

class AddTodo extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    inputHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({
            title:''
        })
    }
    render() {
        return(
            <div>
                <h3>Add Todo</h3>
                <div className="add">
                    <form  onSubmit={ e => this.onSubmit(e)}>
                        <input type="text"
                               placeholder="Add Todo..."
                               value={this.state.title}
                               onChange={e => this.inputHandler(e)}
                               name='title'/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddTodo
