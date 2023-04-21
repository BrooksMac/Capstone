import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, TextField, Grid, Typography } from '@mui/material';

import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export default function InstructorViewPeval() {
    const instantiatedEval = useLoaderData();

    let [value, setValue] = useState(`${instantiatedEval.comments}`);

    let handleInputChange = (e) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };

    return (
        <Grid sx={{ marginX: 15, justifyContent: 'center', mt: 3, bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: 4}}>
            <input hidden name="evaluationId" value={instantiatedEval._id}></input>
            <Typography variant="h4">
                Evaluation for {instantiatedEval.student_id.firstName}{' '}
                {instantiatedEval.student_id.lastName} for month {instantiatedEval.month}
            </Typography>
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

                                <TableCell align="right" style={{ minWidth: '100px' }}>
                                    <TextField
                                        sx={{ width: '100%' }}
                                        InputProps={{ readOnly: true }}
                                        label="Rating"
                                        select
                                        required
                                        value={evals.skill_rating}
                                        defaultValue=""
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

            <TextField
                InputProps={{ readOnly: true }}
                id="outlined-basic"
                name="comments"
                label="Comments"
                variant="outlined"
                fullWidth
                multiline
                value={value}
                onChange={handleInputChange}
                placeholder="Place comments here..."
                sx={{backgroundColor: 'rgba(255, 255, 255, .5)'}}
            />
        </Grid>
    );
}

//preliminary loader
export const instructorEvaluationLoader = async ({ params }) => {
    const evaluationId = params.evaluationID;
    const res = await fetch(`http://localhost:42069/api/preceptor/${evaluationId}`);
    return res;
};
