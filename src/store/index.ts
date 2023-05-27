import create from "solid-zustand";

export interface ITask {
    title: string;
    isComplete: boolean;
}

export interface IToDoList {
    tasks: Array<ITask>;
    addNewTask: (title: string) => void;
}

export type ITasks = Array<ITask>;

export const useStoreTasks = create<IToDoList>((set) => ({
    tasks: [{ isComplete: false, title: "test" }],
    addNewTask: (title: string) => set((state) => ({ tasks: [...state.tasks, { title, isComplete: false }] })),
}));
