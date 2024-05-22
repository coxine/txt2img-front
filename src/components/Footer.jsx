import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box component="footer" textAlign="center">
            <Typography variant="body2" color="textSecondary" component="p">
                考神保佑，走向辉煌！ --- <b>图神庙</b> --- 来自遥远的考神天国
            </Typography>
        </Box>
    );
}