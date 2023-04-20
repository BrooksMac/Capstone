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
    Input,
    Stack,
    Typography,
} from '@mui/material';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstructorChecklistAccordion from '../../components/instructor/checklist/InstructorChecklistAccordion';

export default function InstructorViewChecklist() {
    const { checklistData } = useLoaderData();

    //Which accordion is currently expanded
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    };

    //Whether or not the dialog/modal is currently open
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Typography variant="h4">
                {checklistData.week.name} Skills Assessment for {checklistData.week.student_id.firstName} {checklistData.week.student_id.lastName},
                filled out by {checklistData.week.preceptor_id.firstName} {checklistData.week.preceptor_id.lastName}
            </Typography>
            <Typography variant="body1">
                First checkbox is the student's, second checkbox is the preceptor's
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
                        <AccordionDetails>
                            <InstructorChecklistAccordion section={section} />
                        </AccordionDetails>
                    </Accordion>
                ))}
                <br />
                <Input name="grade" type="number" min="0" max="100">
                    Grade
                </Input>
                <Stack direction="row" spacing={1} alignContent="center">
                    <Button
                        sx={{margin: '5px 0px'}}
                        variant="contained"
                        color="primary"
                        onClick={() => setOpen(true)}
                    >
                        Submit
                    </Button>
                    <Typography variant="body1">
                        By submitting this form you agree that all information entered is
                        accurate and true.
                    </Typography>
                </Stack>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Submit the form?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to submit the form? You will not be able
                            to edit after submitting.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" form="submit-checklist-form">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </Form>
        </Box>
    );
}

export const instructorSaveGradeAction = async ({ request, params }) => {
    console.log('hello');
    const formData = await request.formData();
    const grade = { grade: formData.get('grade') };

    await fetch(`http://papiris-api.onrender.com/api/weeks/instructor/${params.checklistID}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(grade),
    });

    console.log('hello2');

    return redirect(`/instructor/home`);
};
