import { For } from "solid-js";
import Task from "./Task";
import styles from "./TaskList.module.scss";
import { ITasks } from "../store";

const TaskList = (tasks: ITasks, className: string) => {
    return (
        <ul class={className}>
            <For each={tasks.tasks}>{(task, index) => <Task {...task}></Task>}</For>
        </ul>
    );
};

export default TaskList;
