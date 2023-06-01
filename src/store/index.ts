import { nanoid } from "nanoid";
import create from "solid-zustand";
import { devtools } from "zustand/middleware";

export interface ITask {
    id: string;
    title: string;
    isComplete: boolean;
}

export interface ITasks {
    tasks: Array<ITask>;
}

export interface IToDoList extends ITasks {
    addNewTask: (title: string) => void;
    completeTask: (id: string) => void;
}

export const useStoreTasks = create(
    devtools<IToDoList>(
        (set) => ({
            tasks: [{ isComplete: false, title: "test", id: "1" }],
            addNewTask: (title: string) =>
                set((state) => {
                    const newTask = { title, isComplete: false, id: nanoid() };
                    return { ...state, tasks: [...state.tasks, newTask] };
                }),
            completeTask: (id) =>
                set((state) => {
                    return {
                        ...state,
                        tasks: state.tasks.map((_task) => {
                            if (_task.id == id) {
                                return { ..._task, isComplete: !_task.isComplete };
                            } else {
                                return _task;
                            }
                        }),
                    };
                }),
            deleteTask: (id: string) =>
                set((state) => {
                    return {
                        ...state,
                        tasks: state.tasks.filter((task) => task.id != id),
                    };
                }),
        }),

        { name: "ToDo" }
    )
);
