import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

export default function ImgGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [imgStyle, setImgStyle] = useState({ display: 'none' });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleClick = () => {
        // Set the image source and show the image
        setImgSrc(`https://txt2img.tgcos.workers.dev/?p=${prompt}`);
        setImgStyle({ display: 'block', width: '100%' });
        // Disable the button
        setButtonDisabled(true);
    };

    // This function will be called when the image has finished loading
    const handleImageLoad = () => {
        // Enable the button
        setButtonDisabled(false);
    };

    return (
        <Box
            sx={{
                alignItems: 'center',
                gap: 2,
                p: 2,
            }}
        >
            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                    label="Prompt"
                    variant="outlined"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    fullWidth
                />
                <Button
                    variant="contained"
                    onClick={handleClick}
                    disabled={buttonDisabled}
                    id="generateImage"
                >
                    Generate
                </Button>
            </Box>
            <Container maxWidth="sm" sx={{ py: 2 }}>
                <img
                    src={imgSrc}
                    alt="Generated"
                    style={imgStyle}
                    onLoad={handleImageLoad}
                />
            </Container>
            <Divider />
        </Box>
    );
}