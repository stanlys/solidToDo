import Task from "@suid/icons-material/Task";
import { AppBar, Button, IconButton, Typography, Toolbar, Box, Divider } from "@suid/material";
import { Component } from "solid-js";
import styles from "./TaskListCaption.module.scss";

interface ITaskListCaptionProps {
    name: string;
}

const TaskListCaption: Component<ITaskListCaptionProps> = (props) => {
    const { name } = props;
    return (
        <Box class={styles.caption}>
            <Task />
            <Divider />
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                {name}
            </Typography>
        </Box>
    );
};

export default TaskListCaption;

// <AppBar >
//     <Toolbar sx={{ width: "2px" }}>
//         <IconButton size="small" edge="start" color="inherit" sx={{ mr: 2 }}>
//             <Task />
//         </IconButton>
//         <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
//             {name}
//         </Typography>
//     </Toolbar>
// </AppBar>
