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
import useTheme from "@suid/material/styles/useTheme";
import { Toaster } from "solid-toast";
import MainToolbar from "./components/MainToolbar";
import Footer from "./components/Footer";
import AddModal from "./components/AddModal";
import { Dynamic } from "solid-js/web";

export default function App() {
    const [showAddBtn, setShowAddBtn] = createSignal(false);
    const [showTasksBtn, setShowTasksBtn] = createSignal(false);
    const [showModal, setShowModal] = createSignal(false);
    console.log(showAddBtn());

    const handleOpen = () => setShowAddBtn(true);
    const handleClose = () => setShowModal(false);

    const { tasks, addNewTask } = useStoreTasks((state) => state);

    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MainToolbar />
            <Box class={styles.wrapper}>
                <Box>
                    <TaskList tasks={tasks} className={styles.listToDoLeft} taskListCaption="Work" />
                    <TaskList tasks={tasks} className={styles.listToDoCenter} taskListCaption="ToDo..." />
                    <TaskList tasks={tasks} className={styles.listToDoRight} taskListCaption="Done" />
                </Box>

                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => {
                        setShowModal(!showModal());
                        // handleOpen();
                    }}
                >
                    {!showModal() ? <AddIcon /> : <HideSource />}
                </Fab>

                <Toaster />
            </Box>
            <Footer />
            <Dynamic component={AddModal} isOpen={showModal()} setShowAddBtn={setShowAddBtn}></Dynamic>
            <Show when={showModal()} fallback={<> </>}>
                <AddModal isOpen={showModal()} setShowAddBtn={handleClose} />
            </Show>
        </Box>
    );
}
