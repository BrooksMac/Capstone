import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Box, Typography } from '@mui/material';
import tile from '../img/tile.jpg'

export default function RootLayout() {
    const { user } = useAuthContext();

    const location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <>
        <Box component="footer" sx={{
            minHeight: '100vh',
            height: "auto",
            backgroundImage: `linear-gradient(180deg, rgba(250, 250, 250, 1) 10%, rgba(250, 250, 250, 0.8) 40%, rgba(250, 250, 250, 0) 70%), url(${tile})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
        }}>
            {user && <Navbar />}
            <Outlet />
            <Typography></Typography>
        </Box>
        </>
    );
}
