import { Fab } from "@suid/material";
import { Box } from "@suid/material";
import AddIcon from "@suid/icons-material/Add";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList, { IToDoList } from "./todo/TaskList";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);

    const [toDos, setToDos] = createSignal<IToDoList>({ tasks: [] });

    // const tasks: IToDoList = {
    //     tasks: [
    //         { title: "1", isComplete: false },
    //         { title: "2", isComplete: false },
    //     ],
    // };

    const addNewTask = (taskName: string) => {
        // tasks.tasks.push({ isComplete: false, title: taskName });
        // console.log(tasks);
        const tasks = toDos();
        setToDos((_tasks) => ({ tasks: [..._tasks.tasks, { title: taskName, isComplete: false }] }));
    };

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
                <TaskList tasks={toDos().tasks}></TaskList>
            </Show>
        </Box>
    );
}
