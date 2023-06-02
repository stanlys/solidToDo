import { Checkbox, Divider } from "@suid/material";
import { ITask, useStoreTasks } from "../store";
import DeleteOutline from "@suid/icons-material/DeleteOutline";
import { IconButton } from "@suid/material";
import styles from "./Task.module.scss";
import { Component } from "solid-js";

const Task: Component<ITask> = (task) => {
    const completeTask = useStoreTasks((state) => state.completeTask);
    const deleteTask = useStoreTasks((state) => state.deleteTask);

    return (
        <>
            <li class={task.isComplete ? styles.was : styles.will}>
                <Checkbox
                    checked={task.isComplete}
                    onChange={(e) => {
                        completeTask(task.id);
                    }}
                ></Checkbox>
                {task.title}
                <IconButton color="warning" component="span" onClick={() => deleteTask(task.id)}>
                    <DeleteOutline />
                </IconButton>
            </li>
            <Divider />
        </>
    );
};

export default Task;
