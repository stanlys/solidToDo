import { Checkbox, Divider } from "@suid/material";

export interface ITask {
    title: string;
    isComplete: boolean;
}

const Task = (task: ITask) => {
    return (
        <>
            <li>
                <Checkbox checked={task.isComplete}></Checkbox> {task.title}
            </li>
            <Divider />
        </>
    );
};

export default Task;
