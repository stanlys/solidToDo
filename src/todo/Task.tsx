import { Checkbox, Divider } from "@suid/material";
import { ITask } from "../store";

const Task = (task: ITask) => {
    return (
        <>
            <li>
                <Checkbox
                    checked={task.isComplete}
                    onChange={(e) => {
                        task.isComplete = !task.isComplete;
                    }}
                ></Checkbox>
                {task.title}
            </li>
            <Divider />
        </>
    );
};

export default Task;
