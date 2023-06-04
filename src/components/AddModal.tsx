import { Modal, Box, Button, Toolbar, AppBar } from "@suid/material";
import CreateToDo from "../todo/Createtodo";
import { useStoreTasks } from "../store";
import { Component } from "solid-js";
import styles from "./AddModal.module.scss";

interface AddModalProps {
    isOpen: boolean;
    setShowAddBtn: (v: boolean) => void;
}

const AddModal: Component<AddModalProps> = (props) => {
    const { setShowAddBtn, isOpen } = props;

    const { addNewTask } = useStoreTasks((state) => state);

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
                </Box>
            </Box>
        </Modal>
    );
};

export default AddModal;
