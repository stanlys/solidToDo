import { For } from "solid-js";
import Task from "./Task";
import styles from "./TaskList.module.scss";
import { IToDoList } from "../store";



const TaskList = (tasks: IToDoList) => {
    return (
        <ul class={styles.listToDo}>
            <For each={tasks.tasks}>{(task, index) => <Task {...task}></Task>}</For>
        </ul>
    );
};

export default TaskList;
