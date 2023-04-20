import {
    Typography,
    Button,
    Link,
    Accordion,
    AccordionSummary,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    AccordionDetails,
    Paper,
} from '@mui/material';
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InstructorHome() {
    const userId = JSON.parse(localStorage.getItem('auth')).result._id;

    const navigate = useNavigate();
    const students = useLoaderData();

    //for use with the accordian
    const [expanded, setExpanded] = useState();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion
                sx={{ width: 1 }}
                xs={12}
                sm={6}
                md={4}
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Students
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={1}>
                        {students ? (students.map((student, idx) => (
                            <Grid item key={idx} sx={{ minWidth: 275 }}>
                                <Paper elevation={10}>
                                    <Card
                                        sx={{
                                            border: 5,
                                            borderStyle: 'solid',
                                            borderColor: 'rgb(25, 118, 210)',
                                        }}
                                        display="flex"
                                    >
                                        <Grid
                                            container
                                            justifyContent="space-between"
                                            alignItems="center"
                                        ></Grid>

                                        <CardHeader
                                            fontWeight="bold"
                                            title="Student Name:"
                                            subheader={
                                                student.firstName + ' ' + student.lastName
                                            }
                                        />
                                        <CardContent>
                                            {/* <Typography
                                                sx={{ fontSize: 14 }}
                                                variant="h5"
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                A place for more student information if
                                                deemed necessary
                                            </Typography> */}
                                            {/* <Typography component="div">
                                                {student._id}
                                            </Typography> */}
                                            <CardActions>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() =>
                                                        navigate(
                                                            `/instructor/documents/${student._id}`
                                                        )
                                                    }
                                                >
                                                    View Documents
                                                </Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </Grid>
                            ))
                        ) : (
                            <Typography>No students</Typography>
                        )}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion
                sx={{ width: 1 }}
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                        Account Management
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <br />
                    <br />
                    {/* <Typography variant="h6">
                        <Link href="/instructor/join-codes" underline="always">
                            Manage Join Codes
                        </Link>
                    </Typography> */}
                    <Button variant="contained" color="primary" onClick={() => navigate('/instructor/join-codes')}>
                        Manage Join Codes
                    </Button>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

//preliminary loader
export const instructorHomeLoader = async () => {
    const userId = JSON.parse(localStorage.getItem('auth')).result._id;

    const res = await fetch(`http://papiris-api.onrender.com/api/instructor/${userId}`);
    const students = await res.json();
    console.log(students);
    return students;
};
