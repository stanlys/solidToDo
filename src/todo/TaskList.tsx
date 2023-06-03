import { Component, For } from "solid-js";
import Task from "./Task";
import styles from "./TaskList.module.scss";
import { ITask, ITasks } from "../store";
import TaskListCaption from "../components/TaskListCaption";

export interface ITasksListProps {
    tasks: ITask[];
    className: string;
    taskListCaption: string;
}

const TaskList: Component<ITasksListProps> = (props) => {
    const { className, tasks, taskListCaption } = props;

    return (
        <>
            <ul class={className}>
                <TaskListCaption name={taskListCaption} />
                <For each={tasks}>{(task, index) => <Task {...task}></Task>}</For>
            </ul>
        </>
    );
};

export default TaskList;
