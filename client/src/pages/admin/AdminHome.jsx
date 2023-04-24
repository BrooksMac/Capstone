import { Typography, Link, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
    const navigate = useNavigate();
    return (
        <>
            <br />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                Admin Homepage
            </Typography>
            <br />
            <Typography variant="h4">
            <Button
                                size="lg"
                                variant='contained'
                                onClick={() => navigate('/admin/join-codes')}
                            >
                                Manage Join Codes
                                </Button >
            </Typography>
        </>
    );
};

export default AdminHome;