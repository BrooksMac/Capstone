import {useSignup} from '../hooks/useSignup'
import {useState} from "react";
import {Typography, Button, Stack, TextField, Link} from '@mui/material';

const Signup = () => {
    const [code, setCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup();

    /* Called by the sign up form onSubmit function.
     */
    const handleLogin = async (event) => {
        // Prevent default refresh page behaviour on form submission.
        event.preventDefault();
        await signup(code, firstName, lastName, email, password);
    }

    /* onChange fires a function that takes in the event.
     * Function sets the email const defined above based on inputed value. 
     * Then set value of the input to the email const for two-way data binding.
     * Clicking the button fires the onSubmit function on the form.
     */
    return (
        <form className="signup" onSubmit={handleLogin}>
            <Typography variant='h4' component='h1'>Competency Tracking Tool</Typography><br/>
            <Typography variant='h5' component='h2' sx={{ fontWeight: 'bold' }}>Create an account</Typography><br/>
            <Stack spacing={2}>
                <Stack direction='row' spacing={2}>
                    <TextField label='Join code' type='text' onChange={(event) => setCode(event.target.value)} value={code}/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField label='First name' type='text' onChange={(event) => setFirstName(event.target.value)} value={firstName}/>
                    <TextField label='Last name' type='text' onChange={(event) => setLastName(event.target.value)} value={lastName}/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField label='Email' type='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <TextField label='Password' type='password' onChange={(event) => setPassword(event.target.value)} value={password}/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Button variant="contained" disabled={isLoading}>Sign up</Button><br/><br/>
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Typography variant='h6'>
                        <Link href='/' underline='hover'>Return to login page</Link>
                    </Typography>
                </Stack>            
            </Stack>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default Signup;
