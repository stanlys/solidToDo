import { Fab, Modal } from "@suid/material";
import { Box } from "@suid/material";
import Shower from "@suid/icons-material/Visibility";
import HideSource from "@suid/icons-material/HideSource";
import AddIcon from "@suid/icons-material/Add";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList from "./todo/TaskList";
import { ITasks, useStoreTasks } from "./store";
import { nanoid } from "nanoid";
import useTheme from "@suid/material/styles/useTheme";
import { Toaster } from "solid-toast";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);
    const [showTasksBtn, setShowTasksBtn] = createSignal(false);

    const handleOpen = () => setShowAddBtn(true);
    const handleClose = () => setShowAddBtn(false);

    const { tasks, addNewTask } = useStoreTasks((state) => state);

    const theme = useTheme();

    return (
        <Box class={styles.wrapper}>
            <Box>
                <Show when={showTasksBtn()} fallback={<></>}>
                    <TaskList tasks={tasks} className="fewfew"></TaskList>
                </Show>
            </Box>
            <Fab
                color="primary"
                class={styles.add_btn}
                aria-label="add"
                onClick={() => {
                    setShowTasksBtn(!showTasksBtn());
                }}
            >
                {!showTasksBtn() ? <Shower /> : <HideSource />}
            </Fab>

            <Fab
                color="primary"
                class={styles.add_btnTop}
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
                    <CreateToDo addNewTask={addNewTask} />
                </Box>
            </Modal>
            <Toaster />
        </Box>
    );
}
