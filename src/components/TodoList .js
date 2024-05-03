// homework lesson 3
// task2
// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.
// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import { useState } from 'react';
import { Box, Paper, TextField, Checkbox, Typography, Button, Card, CardActions, CardContent, Grid } from '@mui/material';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    const { id, text, completed } = todo;

    return (
        <CardContent display="flex" alignItems="center" marginY="8px">
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, mr: '16px', textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
            </Typography>
            <CardActions >
                <Checkbox checked={completed} onChange={() => onToggle(id)} />
                <Button variant="outlined" size="small" color="error" onClick={() => onDelete(id)}>Delete</Button>
            </CardActions>
        </CardContent >
    );
};

const TodoList = ({ todos, onToggle, onDelete }) => (
    <Box>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
    </Box>
);

const TodoForm = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!text.trim()) return;
        onSubmit(text);
        setText('');
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            alignItems="center"
            marginBottom="16px"
            sx={{ '& .MuiTextField-root': { flexGrow: 1, marginRight: '16px' } }}
        >
            <TextField value={text} onChange={(event) => setText(event.target.value)} label="New todo" variant="outlined" />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </Box>
    );
};

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const handleToggleTodo = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo
            )
        );
    };

    const handleDeleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    return (
        <Box maxWidth="600px" margin="0 auto" padding="16px">
            <Typography variant="h3" align="center" gutterBottom>
                Todo List
            </Typography>
            <Paper component={TodoForm} onSubmit={handleAddTodo} marginBottom="16px" />
            <Paper component={TodoList} todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </Box>
    );
};

export default TodoApp;