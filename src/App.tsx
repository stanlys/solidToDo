import { Button, Fab, IconButton, Modal, Toolbar } from "@suid/material";
import { Box } from "@suid/material";
import Shower from "@suid/icons-material/Visibility";
import HideSource from "@suid/icons-material/HideSource";
import AddIcon from "@suid/icons-material/Add";
import styles from "./App.module.scss";
import CreateToDo from "./todo/Createtodo";
import { Show, createSignal } from "solid-js";
import TaskList from "./todo/TaskList";
import { useStoreTasks } from "./store";
import { nanoid } from "nanoid";
import useTheme from "@suid/material/styles/useTheme";
import { Toaster } from "solid-toast";
import MainToolbar from "./components/MainToolbar";
import Footer from "./components/Footer";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);
    const [showTasksBtn, setShowTasksBtn] = createSignal(false);

    const handleOpen = () => setShowAddBtn(true);
    const handleClose = () => setShowAddBtn(false);

    const { tasks, addNewTask } = useStoreTasks((state) => state);

    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MainToolbar />
            <Box class={styles.wrapper}>
                <Box>
                    {/* <Show when={showTasksBtn()} fallback={<span> Press view ord add btn....</span>}>
                        <TaskList tasks={tasks} className={styles.listToDo} />
                    </Show> */}
                    <TaskList tasks={tasks} className={styles.listToDoLeft} taskListCaption="Work" />
                    <TaskList tasks={tasks} className={styles.listToDoRight} taskListCaption="Done" />
                </Box>
                {/* <Fab
                    color="primary"

                    aria-label="add"
                    onClick={() => {
                        setShowTasksBtn(!showTasksBtn());
                    }}
                >
                    {!showTasksBtn() ? <Shower /> : <HideSource />}
                </Fab> */}

                <Fab
                    color="primary"
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
                            bgcolor: "#add8e6",
                            border: "1px solid #blue",
                            borderRadius: "5px",
                            boxShadow: "24px",
                            p: 4,
                        }}
                    >
                        <CreateToDo addNewTask={addNewTask} />
                    </Box>
                </Modal>
                <Toaster />
                
            </Box>
            <Footer />
        </Box>
    );
}
