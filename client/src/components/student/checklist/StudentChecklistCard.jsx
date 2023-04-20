import {
    Alert,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function StudentChecklistCard({ checklist }) {
    const navigate = useNavigate();

    //useStates for the button's availability and loading status
    const [viewDisabled, setViewDisabled] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [submitIsLoading, setSubmitIsLoading] = useState(false);

    //useState for the dialog
    const [open, setOpen] = useState(false);

    //useState and submit function for submitting checklists
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const handleSubmit = async () => {
        setError(null);
        setMessage(null);
        setOpen(false);
        setSubmitIsLoading(true);
        setViewDisabled(true);
        setSubmitDisabled(true);

        const res = await fetch(
            `https://papiris-api.onrender.com/api/weeks/submit/${checklist._id}`,
            {
                method: 'PATCH',
            }
        );

        const json = await res.json();

        if (!res.ok) {
            setError(json.error);
            setViewDisabled(false);
            setSubmitDisabled(false);
        } else {
            setMessage(json.message);
        }

        setSubmitIsLoading(false);
    };

    useEffect(() => {}, [error, message]);

    return (
        <>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
            <Card elevation={10} sx={{ maxWidth: '300px', border: 5, borderStyle: 'solid', borderColor: 'rgb(25, 118, 210)', }}>
                <CardContent>
                    <Typography variant="h5">{checklist.name}</Typography>
                    <Typography variant="body1">
                        <b>Preceptor:</b>{' '}
                        {!checklist.preceptor_id
                            ? 'None Selected'
                            : checklist.preceptor_id.firstName +
                              ' ' +
                              checklist.preceptor_id.lastName}
                        <br />
                        <b>Submitted:</b>{' '}
                        {checklist.submitted_to_preceptor ? 'Yes' : 'No'}
                        <br />
                        <b>Grade:</b>{' '}
                        {!checklist.grade ? 'Not yet graded' : checklist.grade}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"
                        disabled={checklist.submitted_to_preceptor || viewDisabled}
                        onClick={() => {
                            navigate(`/student/checklist/${checklist._id}`);
                        }}
                    >
                        View
                    </Button>
                    <LoadingButton
                        color="success"
                        variant="contained"
                        disabled={checklist.submitted_to_preceptor || submitDisabled}
                        loading={submitIsLoading}
                        onClick={() => setOpen(true)}
                    >
                        Submit
                    </LoadingButton>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Submit the form?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit the form? You will not be able to
                        edit after submitting.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
