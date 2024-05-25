import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from '@/pages/App';
import { green, lightGreen } from '@mui/material/colors';
import Head from 'next/head';



function Index() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: green,
                    secondary: lightGreen,
                },
            }),
        [prefersDarkMode],
    );

    return (
        <div>
            <Head>
                <title>图神庙</title>
                <meta name="keywords" content="图神庙,txt2img,文本生成图片,生成图片" />
                <meta property="og:title" content="图神庙" />
                <meta property="og:description" content="一个生成图片的网站，输入文字，生成图片" />
                <meta property="og:image" content="/favicon.svg" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </div>
    );
}

export default Index;
