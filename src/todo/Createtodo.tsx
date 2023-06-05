import { Button, TextField } from "@suid/material";
import { JSX } from "solid-js/jsx-runtime";
import styles from "./Createtodo.module.scss";
import { createSignal } from "solid-js";
import { useStoreTasks } from "../store";
import toast, { Toaster } from "solid-toast";

export interface ICreateToDo {
    addNewTask: (s: string) => void;
}

export default function CreateToDo(props: ICreateToDo): JSX.Element {
    const [taskName, setTaskName] = createSignal("");

    const addNewTask = (e: InputEvent) => {
        setTaskName((e.currentTarget as HTMLInputElement).value);
    };

    const addNewTasktoStore = useStoreTasks((state) => state.addNewTask);

    const notify = () => toast.success("Task was created.", { duration: 5000, position: "bottom-left" });

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

                    addNewTasktoStore(taskName());
                    setTaskName("");
                    notify();
                }}
            >
                Add Task
            </Button>
        </span>
    );
}
