import { Fab } from "@suid/material";
import { Box } from "@suid/material";
import AddIcon from "@suid/icons-material/Add";
import HideSource from "@suid/icons-material/HideSource";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList from "./todo/TaskList";
import { useStoreTasks } from "./store";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);

    // const [toDos, setToDos] = createSignal<IToDoList>({ tasks: [] });

    // const addNewTask = (taskName: string) => {
    //     const tasks = toDos();
    //     setToDos((_tasks) => ({ tasks: [..._tasks.tasks, { title: taskName, isComplete: false }] }));
    // };

    const { tasks, addNewTask } = useStoreTasks((state) => state);
    // console.log(tasks.length);

    return (
        <Box class={styles.wrapper}>
            <Box>
                <Show when={showAddBtn()} fallback={<></>}>
                    <CreateToDo addNewTask={addNewTask} />
                    <TaskList tasks={tasks}></TaskList>
                </Show>
            </Box>
            <Fab
                color="primary"
                class={styles.add_btn}
                aria-label="add"
                onClick={() => {
                    setShowAddBtn(!showAddBtn());
                }}
            >
                {!showAddBtn() ? <AddIcon /> : <HideSource />}
            </Fab>
        </Box>
    );
}
