import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, Button, TextField } from '@mui/material';

import { useLoaderData, useActionData, redirect, Form } from 'react-router-dom';

export default function PreceptorEvaluate() {
    const instantiatedEval = useLoaderData();

    let [value, setValue] = useState(`${instantiatedEval.comments}`);

    let handleInputChange = (e) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };

    const data = useActionData();

    return (
        <Form method="post">
            <input hidden name="evaluationId" value={instantiatedEval._id}></input>

            <TableContainer
                component={Paper}
                sx={{ width: '100%', overflowX: 'visible' }}
            >
                <Table
                    text-align="center"
                    sx={{ minWidth: 100 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Evaluation Criteria</TableCell>
                            <TableCell align="center">Industry Ready</TableCell>
                            <TableCell align="center">Entry Level</TableCell>
                            <TableCell align="center">Satisfactory</TableCell>
                            <TableCell align="center">Needs Improvement</TableCell>
                            <TableCell align="center">Unnacceptable</TableCell>
                            <TableCell align="center">Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {instantiatedEval.performance_assessment.map((evals, idx) => (
                            <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {evals.skill_name}
                                </TableCell>

                                {evals.rating_description.map((desc, idx2) => (
                                    <TableCell key={idx2}>{desc}</TableCell>
                                ))}

                                <TableCell align="right" style={{ minWidth: '100px' }}>
                                    <TextField
                                        sx={{ width: '100%' }}
                                        label="Rating"
                                        select
                                        required
                                        defaultValue={evals.skill_rating || ''}
                                        name={evals.skill_name + 'rating'}
                                        size="small"
                                        color="secondary"
                                    >
                                        <MenuItem value={5}>Industry Ready</MenuItem>
                                        <MenuItem value={4}>Entry Level</MenuItem>
                                        <MenuItem value={3}>Satisfactory</MenuItem>
                                        <MenuItem value={2}>Needs Improvement</MenuItem>
                                        <MenuItem value={1}>Unnacceptable</MenuItem>
                                    </TextField>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <div style={{ margin: '5px' }}>
            <TextField
                id="outlined-basic"
                name="comments"
                label="Comments"
                variant="outlined"
                fullWidth
                multiline
                value={value}
                onChange={handleInputChange}
                placeholder="Place comments here..."
            />
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button sx={{margin: '5px 0px', padding: '5px 70px'}} type="submit" variant="contained" color="primary" align='center'>
                Submit
            </Button>
            </div>
        </Form>
    );
}

//preliminary loader
export const viewEvaluationLoader = async ({ params }) => {
    const evaluationId = params.evaluationID;
    const res = await fetch(`https://papiris-api.onrender.com/api/preceptor/${evaluationId}`);
    return res;
};

export const editEvaluationAction = async ({ request }) => {
    //grab the form data
    const user = JSON.parse(localStorage.getItem('auth')).result._id;
    const data = await request.formData();
    const evaluationId = data.get('evaluationId');

    console.log(evaluationId);

    //grab the master evaluation
    const res = await fetch(`https://papiris-api.onrender.com/api/preceptor/${evaluationId}`);
    const newEval = await res.json();

    newEval.comments = data.get('comments');
    newEval.complete = true;

    newEval.performance_assessment.map((evals) => {
        evals.skill_rating = data.get(evals.skill_name + 'rating');
    });

    await fetch(`https://papiris-api.onrender.com/api/preceptor/${evaluationId}`, {
        method: 'PUT',
        body: JSON.stringify(newEval),
        headers: { 'Content-Type': 'application/json' },
    });

    return redirect(`/preceptor/home`);
};
