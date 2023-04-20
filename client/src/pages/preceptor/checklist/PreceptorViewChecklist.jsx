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
    Stack,
    Typography,
} from '@mui/material';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PreceptorChecklistAccordion from '../../../components/preceptor/checklist/PreceptorChecklistAccordion';

export default function PreceptorViewChecklist() {
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
                {checklistData.week.name} Skills Assessment for{' '}
                {checklistData.week.student_id.firstName +
                    ' ' +
                    checklistData.week.student_id.lastName}
            </Typography>
            <Typography variant="body1">
                The first checkbox is the student's input, the second is yours. Please
                mark what you believe the student has completed on the provided dates.
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
                            <PreceptorChecklistAccordion section={section} />
                        </AccordionDetails>
                    </Accordion>
                ))}
                <Stack direction="row" spacing={1} alignContent="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpen(true)}
                    >
                        Save
                    </Button>
                </Stack>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Save the form?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to save the form? You <b>will</b> be
                            able to edit after submitting.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" form="submit-checklist-form">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Form>
        </Box>
    );
}

export const preceptorSaveChecklistAction = async ({ request, params }) => {
    const formData = await request.formData();
    const res = await fetch(`https://papiris-api.onrender.com/api/weeks/${params.checklistID}`);
    const loaderData = await res.json();

    const resData = [];

    //eslint-disable-next-line
    loaderData.week.skills_assessment.section.map((section) => {
        //eslint-disable-next-line
        section.skills.map((skill) => {
            for (let i = 0; i < section.experiences; i++) {
                const data = formData.get(
                    `${section.name} ${skill.name} Experience ${i} preceptor`
                );
                resData.push({
                    section: section.name,
                    skill: skill.name,
                    experience: i + 1,
                    checked: data === null ? false : true,
                });
            }
        });
    });

    //Send the update to the database
    await fetch(`https://papiris-api.onrender.com/api/weeks/preceptor/${params.checklistID}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resData),
    });

    return redirect(`/preceptor/home`);
};
