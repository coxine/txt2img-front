import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { GitHub } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { Link } from '@mui/material';


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        图神庙
                    </Typography>
                    <Link href="https://github.com/coxine/txt2img-front"><IconButton><GitHub /></IconButton></Link>
                    <Link href="https://cos.tg"><IconButton><Home /></IconButton></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}