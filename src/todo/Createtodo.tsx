import { Button, TextField } from "@suid/material";
import { JSX } from "solid-js/jsx-runtime";
import styles from "./Createtodo.module.scss";

export default function CreateToDo(): JSX.Element {
    return (
        <span class={styles.inputArea}>
            <TextField placeholder="Input task" variant="outlined" label="Input task" />
            <Button color="primary"> Add Task</Button>
        </span>
    );
}
