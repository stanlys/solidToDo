import { Fab } from "@suid/material";
import { Box } from "@suid/material";
import AddIcon from "@suid/icons-material/Add";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList from "./todo/TaskList";
import { ITasks, useStoreTasks } from "./store";
import { nanoid } from "nanoid";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);

    const [toDos, setToDos] = createSignal<ITasks>({ tasks: [] });

    const addNewTaskSignal = (taskName: string) => {
        const tasks = toDos();
        setToDos((_tasks) => ({ tasks: [..._tasks.tasks, { title: taskName, isComplete: false, id: nanoid() }] }));
    };

    const { tasks, addNewTask } = useStoreTasks((state) => state);
    // console.log(tasks.length);

    return (
        <Box>
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
        </Box>
    );
}
