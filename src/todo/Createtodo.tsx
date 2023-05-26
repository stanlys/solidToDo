import { Button, TextField } from "@suid/material";
import { JSX } from "solid-js/jsx-runtime";
import styles from "./Createtodo.module.scss";
import { createSignal } from "solid-js";

export interface ICreateToDo {
    addNewTask: (s: string) => void;
}

export default function CreateToDo(props: ICreateToDo): JSX.Element {
    const [taskName, setTaskName] = createSignal("");

    return (
        <span class={styles.inputArea}>
            <TextField
                placeholder="Input task"
                variant="outlined"
                label="Input task"
                value={taskName()}
                onChange={(e) => setTaskName(e.currentTarget.value)}
            />
            <Button color="primary" onClick={() => props.addNewTask(taskName())}>
                Add Task
            </Button>
        </span>
    );
}
