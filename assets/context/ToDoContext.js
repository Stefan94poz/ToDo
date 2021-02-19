import React, {Component, createContext} from 'react';

export const ToDoContext = createContext();

class ToDoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [test]
        };
    }


    render() {
        return (
            <ToDoContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default ToDoContextProvider;