import { Component, For } from "solid-js";
import Task from "./Task";
import styles from "./TaskList.module.scss";
import { ITask, ITasks } from "../store";

export interface ITasksListProps {
    tasks: ITask[];
    className: string;
}

const TaskList: Component<ITasksListProps> = (props) => {
    const { className, tasks } = props;
    console.log(tasks);

    return (
        <ul class={className}>
            <For each={tasks}>{(task, index) => <Task {...task}></Task>}</For>
        </ul>
    );
};

export default TaskList;
