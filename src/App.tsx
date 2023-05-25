import Button from "@suid/material/Button";
import styles from "./App.module.scss";
import CreateToDo from "./todo/createtodo";

export default function App() {
    return (
        <div class={styles.wrapper}>
            <CreateToDo />
        </div>
    );
}
