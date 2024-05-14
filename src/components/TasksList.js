import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../reducers/tasksSlice";

const TasksList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.entities);
    const loading = useSelector((state) => state.tasks.loading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    console.log(tasks.map((task) => (
        task.id
    )));

    return (
        <div>
            <h1>Список задач</h1>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TasksList;
