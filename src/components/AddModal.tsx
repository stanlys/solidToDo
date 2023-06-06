import { Modal, Box, Button, Switch } from "@suid/material";
import CreateToDo from "../todo/Createtodo";
import { useStoreTasks } from "../store";
import { Component, Show, createSignal } from "solid-js";
import styles from "./AddModal.module.scss";
import Additional from "./Additional";

interface AddModalProps {
    isOpen: boolean;
    setShowAddBtn: (v: boolean) => void;
}

const AddModal: Component<AddModalProps> = (props) => {
    const { setShowAddBtn, isOpen } = props;

    const { addNewTask } = useStoreTasks((state) => state);

    const [isShowAdd, setIsShowAdd] = createSignal(false);

    return (
        <Modal open={isOpen} onClose={() => setShowAddBtn(false)}>
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
                }}
            >
                <Box class={styles.modalHeader}>
                    <span>Caption</span>
                    <Button onClick={() => setShowAddBtn(false)} class={styles.closeBtn}>
                        X
                    </Button>
                </Box>
                <Box sx={{ p: 3 }}>
                    <CreateToDo addNewTask={addNewTask} />
                    <span>
                        Use random setting: No
                        <Switch onChange={() => setIsShowAdd(!isShowAdd())}></Switch>
                        Yes
                    </span>
                    <Show when={isShowAdd()} fallback={<div>Additional setting</div>}>
                        <Additional />
                    </Show>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddModal;
