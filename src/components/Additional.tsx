import { Box, Paper, TextField } from "@suid/material";
import { Switch } from "@suid/material";

const Additional = () => {
    return (
        <Box>
            <span>
                Default setting <Switch></Switch> Custom setting
            </span>
            <Paper variant="outlined">
                <label for="chooseColor"> Choose color</label>
                <input type="color" id="chooseColor" />
            </Paper>
        </Box>
    );
};

export default Additional;
