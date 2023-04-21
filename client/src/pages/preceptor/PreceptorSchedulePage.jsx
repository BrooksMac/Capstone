import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

const InstructorSchedulePage = () => {
    // state
    const [studentIDState, setStudentIDState] = useState(null);
    const [weekData, setWeekData] = useState(null);
    const [approveDialogState, setApproveDialogState] = useState(null);
    const [disapproveDialogState, setDisapproveDialogState] = useState(null);

    // handle search button click; get a schedule by a users sait id
    async function handleSearch(e) {
        e.preventDefault();
        const response = await fetch(
            `https://papiris-api.onrender.com/api/schedules/student/${studentIDState}`
        );
        setWeekData(await response.json());
    }

    // handle approving
    async function handleApprove(e) {
        e.preventDefault();
        const response = await fetch(
            `https://papiris-api.onrender.com/api/schedules/student/approve/${studentIDState}`,
            { method: 'PUT' }
        );
        const json = await response.json();
        setApproveDialogState(!approveDialogState);
    }

    // handle disapproving
    async function handleDispprove(e) {
        e.preventDefault();
        const response = await fetch(
            `https://papiris-api.onrender.com/api/schedules/student/unapprove/${studentIDState}`,
            { method: 'PUT' }
        );
        const json = await response.json();
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
                <TextField
                    label="Student Email"
                    onChange={(e) => setStudentIDState(e.target.value)}
                />
                <Button variant="contained" sx={{ mx: 2 }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>

            {!weekData && (
                <Typography align="center" color="black">
                    Please Enter A Valid Student Email To View A Schedule...
                </Typography>
            )}

            {weekData && (
                <Typography variant="h4" align="center">
                    Schedule Information
                </Typography>
            )}

            {weekData &&
                weekData.weeks.map((week, index) => (
                    <Box
                        key={week._id}
                        sx={{ display: 'flex', justifyContent: 'center', my: 4 }}
                    >
                        <Paper elevation={8}>
                            <Typography sx={{ p: 1 }} variant="h6">
                                Week # {index + 1}
                            </Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell> Type </TableCell>
                                            <TableCell> Sunday </TableCell>
                                            <TableCell> Monday </TableCell>
                                            <TableCell> Tuesday </TableCell>
                                            <TableCell> Wednesday </TableCell>
                                            <TableCell> Thursday </TableCell>
                                            <TableCell> Friday </TableCell>
                                            <TableCell> Saturday </TableCell>
                                            <TableCell> Total </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell> Scheduled: </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.sunday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.monday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.tuesday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.wednesday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.thursday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.friday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.saturday.scheduledHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {week.sunday.scheduledHours +
                                                    week.monday.scheduledHours +
                                                    week.tuesday.scheduledHours +
                                                    week.wednesday.scheduledHours +
                                                    week.thursday.scheduledHours +
                                                    week.friday.scheduledHours +
                                                    week.saturday.scheduledHours}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell> Actual: </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.sunday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.monday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.tuesday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.wednesday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.thursday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.friday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {' '}
                                                {week.saturday.actualHours}{' '}
                                            </TableCell>
                                            <TableCell>
                                                {week.sunday.actualHours +
                                                    week.monday.actualHours +
                                                    week.tuesday.actualHours +
                                                    week.wednesday.actualHours +
                                                    week.thursday.actualHours +
                                                    week.friday.actualHours +
                                                    week.saturday.actualHours}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>
                ))}

            {weekData && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                    <Button
                        sx={{ mx: 1 }}
                        variant="contained"
                        color="success"
                        onClick={handleApprove}
                    >
                        Approve
                    </Button>
                    <Button
                        sx={{ mx: 1 }}
                        variant="contained"
                        color="error"
                        onClick={handleDispprove}
                    >
                        Disapprove
                    </Button>
                </Box>
            )}

            <Dialog open={approveDialogState}>
                <DialogTitle>Successfully Approved Schedule!</DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={(e) => setApproveDialogState(!approveDialogState)}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={disapproveDialogState}>
                <DialogTitle>Successfully Dipproved Schedule!</DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={(e) => setDisapproveDialogState(!disapproveDialogState)}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default InstructorSchedulePage;
