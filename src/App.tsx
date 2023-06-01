import { Fab, Modal, Typography } from "@suid/material";
import { Box } from "@suid/material";
import AddIcon from "@suid/icons-material/Add";
import HideSource from "@suid/icons-material/HideSource";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList from "./todo/TaskList";
import { ITasks, useStoreTasks } from "./store";
import { nanoid } from "nanoid";
import useTheme from "@suid/material/styles/useTheme";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);

    const handleOpen = () => setShowAddBtn(true);
    const handleClose = () => setShowAddBtn(false);

    const [toDos, setToDos] = createSignal<ITasks>({ tasks: [] });

    const addNewTaskSignal = (taskName: string) => {
        const tasks = toDos();
        setToDos((_tasks) => ({ tasks: [..._tasks.tasks, { title: taskName, isComplete: false, id: nanoid() }] }));
    };

    const { tasks, addNewTask } = useStoreTasks((state) => state);

    const theme = useTheme();
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

            <Modal
                open={showAddBtn()}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: theme.palette.background.paper,
                        border: "2px solid #000",
                        boxShadow: "24px",
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}
