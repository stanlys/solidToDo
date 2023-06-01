import { Checkbox, Divider } from "@suid/material";
import { ITask, useStoreTasks } from "../store";
import DeleteOutline from "@suid/icons-material/DeleteOutline";
import { IconButton } from "@suid/material";
import styles from "./Task.module.scss";

const Task = (task: ITask) => {
    const completeTask = useStoreTasks((state) => state.completeTask);
    const deleteTask = useStoreTasks((state) => state.completeTask);

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
                <IconButton color="warning" component="span">
                    <DeleteOutline />
                </IconButton>
            </li>
            <Divider />
        </>
    );
};

export default Task;
