import { useSignup } from '../hooks/useSignup';
import { useState } from 'react';
import { Typography, Button, Stack, TextField, Alert, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const navigate = useNavigate();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        signup(
            firstName,
            lastName,
            code,
            email,
            password,
            confirmPassword
        );
    };

    /* onChange fires a function that takes in the event.
     * Function sets the email const defined above based on inputed value.
     * Then set value of the input to the email const for two-way data binding.
     * Clicking the button fires the onSubmit function on the form.
     */
    return (
        <Container maxWidth="sm" sx={{justifyContent: 'center', mt: 3, bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 4}}>
            <Typography variant="h4" component="h1">
                Competency Tracking Tool
            </Typography>
            <form className="signup" onSubmit={handleLogin}>
                <br />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Sign up
                </Typography>
                <br />
                {error && <Alert severity="error">{error}</Alert>}
                <br />
                <br />
                <Stack spacing={2}>
                    <Stack spacing={2} direction="row">
                        <TextField
                            required
                            label="First Name"
                            type="text"
                            onChange={(event) => setFirstName(event.target.value)}
                            value={firstName}
                        />
                        <TextField
                            required
                            label="Last Name"
                            type="text"
                            onChange={(event) => setLastName(event.target.value)}
                            value={lastName}
                        />
                        <TextField
                            required
                            label="Join Code"
                            type="text"
                            onChange={(event) => setCode(event.target.value)}
                            value={code}
                        />
                    </Stack>
                    <TextField
                        required
                        label="Email"
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                    <TextField
                        required
                        label="Confirm Password"
                        type="password"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        value={confirmPassword}
                    />
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Sign up
                    </Button>
                    <Stack direction="row">
                        <Button variant="text" onClick={() => navigate('/request')}>
                            Forgot Password
                        </Button>
                        <Button variant="text" onClick={() => navigate('/')}>
                            Back To Home
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Container>
    );
};

export default Signup;
