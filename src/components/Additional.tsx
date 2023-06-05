import { Box, Paper } from "@suid/material";
import { Switch } from "@suid/material";

const Additional = () => {
    return (
        <Box>
            <span>
                Default setting <Switch></Switch> Custom setting
            </span>
            <Paper variant="outlined"></Paper>
        </Box>
    );
};

export default Additional;
