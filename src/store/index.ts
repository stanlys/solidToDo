import create from "solid-zustand";
import { createStore } from "zustand/vanilla";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ITask {
    title: string;
    isComplete: boolean;
}

export interface ITasks {
    tasks: Array<ITask>;
}

export interface IToDoList extends ITasks {
    addNewTask: (title: string) => void;
}

export const useStoreTasks = create(
    devtools<IToDoList>(
        (set) => ({
            tasks: [{ isComplete: false, title: "test" }],
            addNewTask: (title: string) =>
                set((state) => {
                    const newTask = { title, isComplete: false };
                    return { ...state, tasks: [...state.tasks, newTask] };
                }),
        }),
        { name: "ToDo" }
    )
);
