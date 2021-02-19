import React, {useContext, useState} from 'react';
import {ToDoContext} from "../context/ToDoContext";
import {IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


function ToDoTable() {
    const context = useContext(ToDoContext);
    const [addTodo, setAddTodo] = useState('');
    return (
        <form
            onSubmit={(event) => {
                context.createTodo(event, {task: addTodo})
             }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>
                        <TextField value={addTodo} onChange={(event) => {
                            setAddTodo(event.target.value);
                        }} label="New Task" fullWidth={true} />
                    </TableCell>
                    <TableCell align='right'>
                        <IconButton type="submit">
                            <AddIcon/>
                        </IconButton>
                    </TableCell>
                    {
                        context.todos.slice().reverse().map((todo,index) => (
                            <TableRow key={'todo' + index}>
                                <TableCell>{todo.task}</TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </form>
    );
}

export default ToDoTable;