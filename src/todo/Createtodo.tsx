import { Button, TextField } from "@suid/material";
import { JSX } from "solid-js/jsx-runtime";
import styles from "./Createtodo.module.scss";
import { createSignal } from "solid-js";
import { useStoreTasks } from "../store";

export interface ICreateToDo {
    addNewTask: (s: string) => void;
}

export default function CreateToDo(props: ICreateToDo): JSX.Element {
    const [taskName, setTaskName] = createSignal("");

    const addNewTask = (e: InputEvent) => {
        setTaskName((e.currentTarget as HTMLInputElement).value);
    };

    const addNewTasktoStore = useStoreTasks((state) => state.addNewTask);

    return (
        <span class={styles.inputArea}>
            <TextField
                placeholder="Input task"
                variant="outlined"
                label="Input task"
                value={taskName()}
                onChange={(e) => setTaskName(e.currentTarget.value)}
            />
            <Button
                color="primary"
                onClick={() => {
                    // props.addNewTask(taskName());
                    addNewTasktoStore(taskName());
                    setTaskName("");
                }}
            >
                Add Task
            </Button>
        </span>
    );
}
