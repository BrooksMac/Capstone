import { useRequest } from '../hooks/useRequest';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Link, Alert, Container, Box } from '@mui/material';

const Request = () => {
    const [email, setEmail] = useState('');
    const { sendEmail, isLoading, message, error } = useRequest();
    
    const handleEmail = (event) => {
        event.preventDefault();
        sendEmail(email);
    };

    return (
        <>
            <form className="send_email" onSubmit={handleEmail}>
                <Container sx={{ justifyContent: 'center', textAlign: 'center',  mt: 1, padding: 2, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: 4}}>
                <br />                
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Enter your email to receive a password reset link
                </Typography>
                <br />
                {message && <Alert severity='success'>{message}</Alert>}
                {error && <Alert severity='error'>{error}</Alert>}
                <br /><br />
                <Box >
                    <TextField
                        label="Email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <Button type="submit" variant="contained" disabled={isLoading} sx={{marginX: 1, padding: 1.92}}>
                        Send email
                    </Button>
                </Box>
                <br />
                <Box>
                <Typography variant="h6">
                    <Link href="/" underline="hover">
                        Return to login page
                    </Link>
                </Typography>
                </Box>
                </Container>
            </form>     
        </>
    );
};

export default Request;
