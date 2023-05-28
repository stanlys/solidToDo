import { For } from "solid-js";
import Task from "./Task";
import styles from "./TaskList.module.scss";
import { ITasks } from "../store";

const TaskList = (tasks: ITasks) => {
    return (
        <ul class={styles.listToDo}>
            <For each={tasks.tasks}>{(task, index) => <Task {...task}></Task>}</For>
        </ul>
    );
};

export default TaskList;
