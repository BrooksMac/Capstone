import { useManageJoinCode } from '../../hooks/useManageJoinCode';
import { useState } from 'react';
import {
    Button,
    Stack,
    TextField,
    Alert,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import { useLoaderData } from 'react-router-dom';

const ManageJoinCode = () => {
    const { getStudentCode, getPreceptorCode, resetJoinCode, isLoading, message, error } =
        useManageJoinCode();
    const [joinCode, setJoinCode] = useState('');
    const auth = JSON.parse(localStorage.getItem('auth'));
    const id = auth.result._id;

    const joinCodes = useLoaderData();

    const handleStudentCode = (event) => {
        event.preventDefault();
        getStudentCode(id);
    };

    const handlePreceptorCode = (event) => {
        event.preventDefault();
        getPreceptorCode(id);
    };

    const handleResetJoinCode = (event) => {
        event.preventDefault();
        resetJoinCode(joinCode);
    };

    return (
        <>
            {message && <Alert severity="success">{message}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Join Code</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Creation Date</TableCell>
                            <TableCell>Expiry Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {joinCodes &&
                            joinCodes.map((code) => (
                                <TableRow key={code.code}>
                                    <TableCell>{code.code}</TableCell>
                                    <TableCell>{code.role}</TableCell>
                                    <TableCell>{code.createdAt}</TableCell>
                                    <TableCell>{code.expiryDate}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <Stack direction="row" spacing={2}>
                <form className="student_code" onSubmit={handleStudentCode}>
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Generate student join code
                    </Button>
                </form>
                <form className="preceptor_code" onSubmit={handlePreceptorCode}>
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        Generate preceptor join code
                    </Button>
                </form>
            </Stack>
            <br />
            <br />
            <Stack direction="row" spacing={2}>
                <form className="reset_join_code" onSubmit={handleResetJoinCode}>
                    <Stack direction="row" spacing={2}>
                        <TextField
                            label="Join Code"
                            type="text"
                            onChange={(event) => setJoinCode(event.target.value)}
                            value={joinCode}
                        />
                        <Button type="submit" variant="contained" disabled={isLoading}>
                            Reset expiry date
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </>
    );
};

export default ManageJoinCode;

export const joinCodeLoader = async () => {
    const userID = JSON.parse(localStorage.getItem('auth')).result._id;
    console.log(userID);
    const joinCodes = await fetch(`https://papiris-api.onrender.com/api/auth/joins/codes/${userID}`);

    if (!joinCodes.ok) {
        console.log('There was an error getting the list of join codes.');
    }

    return joinCodes.json();
};
