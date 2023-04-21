import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StudentChecklistAccordion from '../../../components/student/checklist/StudentChecklistAccordion';
import bigsaitlogo from '../../../img/bigsaitlogo.png'

export default function ViewChecklist() {
    //Grabs the data from the backend using the loader function
    const { checklistData, preceptorData } = useLoaderData();

    //Which accordion is currently expanded
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    };

    //Whether or not the dialog/modal is currently open
    const [open, setOpen] = useState(false);

    return (
        
        <Box p={2} sx={{ marginX: 15, justifyContent: 'center', bgcolor: 'rgba(255, 255, 255, 0.8)', borderRadius: 4}}>
            <Typography variant="h4">
                {checklistData.week.name} Skills Assessment
            </Typography>
            <Form method="post" id="submit-checklist-form">
                {checklistData.week.skills_assessment.section.map((section) => (
                    <Accordion
                        key={section.name}
                        expanded={expanded === section.name}
                        onChange={(event, isExpanded) =>
                            handleChange(isExpanded, section.name)
                        }
                    >
                        <AccordionSummary
                            id={`${section.name}-header`}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>{section.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundImage: `url(${bigsaitlogo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <StudentChecklistAccordion section={section} />
                        </AccordionDetails>
                    </Accordion>
                ))}
                <br />
                <TextField
                    label="Preceptor"
                    select
                    fullWidth
                    name="selected-preceptor"
                    defaultValue={
                        checklistData.week.preceptor_id !== '' &&
                        checklistData.week.preceptor_id !== null
                            ? checklistData.week.preceptor_id
                            : ''
                    }
                >
                    {preceptorData.map((preceptor) => {
                        return (
                            <MenuItem key={preceptor._id} value={preceptor._id}>
                                {preceptor.firstName} {preceptor.lastName}
                            </MenuItem>
                        );
                    })}
                </TextField>
                <br />
                <Stack direction="row" spacing={1} alignContent="center">
                    <Button
                        sx={{margin: '5px 0px'}}
                        variant="contained"
                        color="primary"
                        onClick={() => setOpen(true)}
                    >
                        Save
                    </Button>
                    <Typography variant="body1">
                        By filling this form you, agree that all information entered is
                        accurate and true.
                    </Typography>
                </Stack>
                <Dialog open={open} onClose={() => setOpen(false)} >
                    <DialogTitle>Save the form?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to save the form? You <b>will</b> still
                            be able to edit after saving.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)} >Cancel</Button>
                        <Button type="submit" form="submit-checklist-form">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Form>
        </Box>
    );
}

export const checklistLoader = async ({ params }) => {
    //Get the user's checklists and a list of all preceptors from the database
    const checklistRes = await fetch(
        `http://localhost:42069/api/weeks/${params.checklistID}`
    );
    const preceptorRes = await fetch(`http://localhost:42069/api/users/preceptors`);

    if (!checklistRes.ok) {
        console.log('There was an error retreiving that checklist');
    }

    if (!preceptorRes.ok) {
        console.log('There was an error retreiving the preceptors');
    }

    const checklistData = await checklistRes.json();
    const preceptorData = await preceptorRes.json();

    return {
        checklistData,
        preceptorData,
    };
};

export const saveChecklistAction = async ({ request, params }) => {
    //Get the submitted from data and the checklist that is being updated from the database
    const formData = await request.formData();
    const res = await fetch(`http://localhost:42069/api/weeks/${params.checklistID}`);
    const loaderData = await res.json();

    //Get the selected preceptor's ID
    const preceptorId = formData.get('selected-preceptor');

    const resData = {
        preceptorId,
        data: [],
    };

    //Loop through the form data and get the values the student has submitted
    //eslint-disable-next-line
    loaderData.week.skills_assessment.section.map((section) => {
        //eslint-disable-next-line
        section.skills.map((skill) => {
            for (let i = 0; i < section.experiences; i++) {
                const data = formData.get(
                    `${section.name} ${skill.name} Experience ${i}`
                );
                const date = formData.get(`${section.name} date ${i}`);
                resData.data.push({
                    section: section.name,
                    skill: skill.name,
                    experience: i + 1,
                    date: date,
                    checked: data === null ? false : true,
                });
            }
        });
    });

    //Send the update to the database
    await fetch(`http://localhost:42069/api/weeks/${params.checklistID}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resData),
    });

    //Redirect to the homepage
    return redirect('/student/home');
};
