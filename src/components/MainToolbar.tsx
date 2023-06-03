import MenuIcon from "@suid/icons-material/Menu";
import { AppBar, Button, IconButton, Typography, Toolbar } from "@suid/material";

const MainToolbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default MainToolbar;
