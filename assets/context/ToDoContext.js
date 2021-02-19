import React, {Component, createContext} from 'react';

export const ToDoContext = createContext();

class ToDoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {task: "Task 1"},
                {task: "Task 2"},
                {task: "Task 3"},


            ],
        };
    }

    //Create
    createTodo(event,todo){
        event.preventDefault();
        let data = [...this.state.todos];
        data.push(todo);
        this.setState({
            todos: data,
        });
    }

    render() {
        return (
            <ToDoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this)
            }}>
                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default ToDoContextProvider;