import { useLogin } from '../hooks/useLogin';
import { useState } from 'react';
import {
    Typography,
    Button,
    Stack,
    TextField,
    Container,
    Divider,
    Alert,
} from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import logo from '../img/sait-logo.png';
import LoginInfoPopUp from '../components/LoginInfoPopUp'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const navigate = useNavigate();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = async (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        await login(email, password);

        const userRole = JSON.parse(localStorage.getItem('auth')).result.role;

        switch (userRole.toLowerCase()) {
            case 'student':
                navigate('/student/home');
                break;
            case 'preceptor':
                navigate(`/preceptor/home`);
                break;
            case 'instructor':
                navigate('/instructor/home');
                break;
            case 'administrator':
                navigate('/admin/home');
                break;
            default:
                navigate('/login');
        }
    };

    /* onChange fires a function that takes in the event.
     * Function sets the email const defined above based on inputed value.
     * Then set value of the input to the email const for two-way data binding.
     * Clicking the button fires the onSubmit function on the form.
     */
    return (
        <Container maxWidth="sm" sx={{ padding: '30px' }}>
            <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
                alignItems="center"
                justifyContent="center"
            >
                <Box component="img" src={logo} sx={{ height: 100 }} />
                <Typography variant="h4" component="h1">
                    Competency Tracking Tool
                </Typography>
            </Stack>

            <form className="login" onSubmit={handleLogin}>
                <br />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    Sign in
                </Typography>
                <br />
                <Stack spacing={2}>
                    <TextField
                        required
                        label="Email Address"
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
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Sign In
                    </Button>
                    <Stack direction="row">
                        <Button variant="text" onClick={() => navigate('/request')}>
                            Forgot Password
                        </Button>
                        <Button variant="text" onClick={() => navigate('/signup')}>
                            Sign up
                        </Button>
                    </Stack>
                </Stack>
                {error && <Alert severity="error">{error}</Alert>}
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LoginInfoPopUp setEmail={setEmail} setPassword={setPassword}/>
            </div>
        </Container>
    );
};

export default Login;
