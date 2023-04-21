import { Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useEffect } from 'react';
import Week from './Week';

/**
 * this component renders a schedule,
 * aka a list of (8) weeks
 */
const Schedule = () => {
    //
    const [weeks, setWeeks] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dialogState, setDialogState] = useState(false);

    // mreow
    const authenticatedUsersStudentEmail = JSON.parse(localStorage.getItem('auth')).result
        .email;
    const authenticatedUsersObjId = JSON.parse(localStorage.getItem('auth')).result._id;

    // todo: fetch & render the logged in users schedule
    useEffect(() => {
        async function fn() {
            const response = await fetch(
                `http://localhost:42069/api/schedules/student/${authenticatedUsersStudentEmail}`
            );
            const json = await response.json();
            setIsSubmitted(json.is_sumbitted);
            setWeeks(json.weeks);
        }

        fn();
    }, []);

    // handle submission
    async function handleSubmission(e) {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:42069/api/schedules/student/submit/${authenticatedUsersStudentEmail}`,
            { method: 'PUT' }
        );
        const json = await response.json();
        console.log(json);
        setIsSubmitted(!isSubmitted);
        setDialogState(!dialogState);
    }

    //
    return (
        <>
            <Box sx={{ display: 'flex', marginX: 15, paddingBottom: 5, justifyContent: 'center', mt: 10, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: 4}}>
                <Box>
                    {weeks &&
                        weeks.map((weekData, index) => (
                            <Week
                                weekData={weekData}
                                weekNumber={index + 1}
                                isSubmitted={isSubmitted}
                                key={index}
                            />
                        ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 5, position: 'relative' }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleSubmission}
                    disabled={isSubmitted}
                    size='large'
                    sx={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                      }}
                >
                    Submit
                </Button>
            </Box>
            </Box>
            

            <Dialog open={dialogState}>
                <DialogTitle>Submission Successful!</DialogTitle>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={(e) => setDialogState(!dialogState)}
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Schedule;
