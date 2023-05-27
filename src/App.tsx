import { Fab } from "@suid/material";
import { Box } from "@suid/material";
import AddIcon from "@suid/icons-material/Add";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList from "./todo/TaskList";
import { IToDoList, useStoreTasks } from "./store";
import { useStore } from "solid-zustand";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);

    const [toDos, setToDos] = createSignal<IToDoList>({ tasks: [] });

    const addNewTask = (taskName: string) => {
        const tasks = toDos();
        setToDos((_tasks) => ({ tasks: [..._tasks.tasks, { title: taskName, isComplete: false }] }));
    };

    const tasks = useStoreTasks((state) => state.tasks);
    // console.log(tasks.length);

    return (
        <Box class={styles.wrapper}>
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => {
                    setShowAddBtn(!showAddBtn());
                }}
            >
                <AddIcon />
            </Fab>
            <Show when={showAddBtn()} fallback={<></>}>
                <CreateToDo addNewTask={addNewTask} />
                <TaskList tasks={tasks}></TaskList>
            </Show>
        </Box>
    );
}
