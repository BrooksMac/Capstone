import * as React from 'react';

import {
    Select,
    MenuItem,
    InputLabel,
    Button,
    TextField,
    Container,
    Typography
} from '@mui/material';

import { useLoaderData, useActionData, redirect, Form } from 'react-router-dom';

export default function RequestPreceptorEvaluation() {
    const users = useLoaderData();
    const data = useActionData();

    const preceptorList = users.sort((a, b) => a.lastName.localeCompare(b.lastName));

    return (
        <Form method="post">
            <Typography variant="h4">
                Request an evaluation from your preceptor
            </Typography>
            <Container>
                <InputLabel id="demo-simple-select-label">
                    First or last evaluation?
                </InputLabel>
                <TextField
                    label="Choose Month"
                    select
                    defaultValue={''}
                    required
                    fullWidth
                    name="month"
                    size="small"
                    color="secondary"
                >
                    <MenuItem value={1}>First</MenuItem>
                    <MenuItem value={2}>Last</MenuItem>
                </TextField>

                <InputLabel>Choose Preceptor</InputLabel>
                <Select name="preceptor" defaultValue={''} fullWidth size="small">
                    {preceptorList.map((preceptor, idx) => (
                        <MenuItem key={idx} value={preceptor._id}>
                            {preceptor.lastName + ' ' + preceptor.firstName}
                        </MenuItem>
                    ))}
                </Select>

                <Container sx={{ padding: '10px' }}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </Container>
            </Container>
        </Form>
    );
}

export const preceptorListLoader = async () => {
    const users = await fetch('https://papiris-api.onrender.com/api/users/preceptors');
    const usersList = await users.json();
    return usersList;
};

export const evaluationRequestAction = async ({ request }) => {
    const user = JSON.parse(localStorage.getItem('auth')).result._id;

    //grab the form data
    const data = await request.formData();
    //grab the master evaluation
    const res = await fetch('https://papiris-api.onrender.com/api/preceptor/eval');
    const newEval = await res.json();

    const month = parseInt(data.get('month'));

    newEval._id = null;
    newEval.is_master = false;
    newEval.month = month;
    newEval.unique = user + month;
    newEval.comments = '';
    newEval.complete = false;
    newEval.preceptor_id = data.get('preceptor');
    newEval.student_id = user;
    newEval.instructor_id = JSON.parse(localStorage.getItem('auth')).result.instructorId;

    const response = await fetch('https://papiris-api.onrender.com/api/preceptor/eval', {
        method: 'POST',
        body: JSON.stringify(newEval),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        const json = await response.json();
        alert(json.error);
        return null;
    }

    return redirect(`/student/home`);
};
