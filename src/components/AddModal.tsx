import { Modal, Box, Button } from "@suid/material";
import CreateToDo from "../todo/Createtodo";
import { useStoreTasks } from "../store";
import { Component } from "solid-js";

interface AddModalProps {
    isOpen: boolean;
    setShowAddBtn: (v: boolean) => void;
}

const AddModal: Component<AddModalProps> = (props) => {
    const { setShowAddBtn, isOpen } = props;

    console.log(isOpen);

    const handleClose = () => setShowAddBtn(false);

    const { addNewTask } = useStoreTasks((state) => state);

    return (
        <Modal open={isOpen} onClose={handleClose}>
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
                <Button onClick={handleClose}>X</Button>
            </Box>
        </Modal>
    );
};

export default AddModal;
