import { Box, Divider } from "@suid/material";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <Box class={styles.footer}>
            <Divider />
            <span>stanlys@yandex.ru</span>
        </Box>
    );
};

export default Footer;
