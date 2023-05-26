import { For } from "solid-js";
import Task, { ITask } from "./Task";
import styles from "./TaskList.module.scss";

export interface IToDoList {
    tasks: Array<ITask>;
}

const TaskList = (tasks: IToDoList) => {
    return (
        <ul class={styles.listToDo}>
            <For each={tasks.tasks}>{(task, index) => <Task {...task}></Task>}</For>
        </ul>
    );
};

export default TaskList;
