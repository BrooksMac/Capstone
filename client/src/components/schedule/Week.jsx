import { TableBody, TableCell, TableRow, TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";

/**
 * 
 */
const Week = ({ weekData, weekNumber, isSubmitted }) => {
    // this is very bad :)
    const [sundayScheduledHours, setSundayScheduledHours]       = useState(weekData.sunday.scheduledHours);
    const [sundayActualHours, setSundayActualHours]             = useState(weekData.sunday.actualHours);
    const [mondayScheduledHours, setMondayScheduledHours]       = useState(weekData.monday.scheduledHours);
    const [mondayActualHours, setMondayActualHours]             = useState(weekData.monday.actualHours);
    const [tuesdayScheduledHours, setTuesdayScheduledHours]     = useState(weekData.tuesday.scheduledHours);
    const [tuesdayActualHours, setTuesdayActualHours]           = useState(weekData.tuesday.actualHours);
    const [wednesdayScheduledHours, setWednesdayScheduledHours] = useState(weekData.wednesday.scheduledHours);
    const [wednesdayActualHours, setWednesdayActualHours]       = useState(weekData.wednesday.actualHours);
    const [thursdayScheduledHours, setThursdayScheduledHours]   = useState(weekData.thursday.scheduledHours);
    const [thursdayActualHours, setThursdayActualHours]         = useState(weekData.thursday.actualHours);
    const [fridayScheduledHours, setFridayScheduledHours]       = useState(weekData.friday.scheduledHours);
    const [fridayActualHours, setFridayActualHours]             = useState(weekData.friday.actualHours);
    const [saturdayScheduledHours, setSaturdayScheduledHours]   = useState(weekData.saturday.scheduledHours);
    const [saturdayActualHours, setSaturdayActualHours]         = useState(weekData.saturday.actualHours);

    //
    const handleWeekUpdate = (e) => {
        e.preventDefault()

        // grab auth info from local storage
        const authenticatedUsersStudentEmail = JSON.parse(localStorage.getItem('auth')).result.email;
        const auth = JSON.parse(localStorage.getItem('auth'));
        const token = auth.result.token
        const studentId = auth.result._id

        fetch(`http://papiris-api.onrender.com/api/schedules/${authenticatedUsersStudentEmail}/${weekNumber}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
                weeks: {
                    sunday:    { scheduledHours: Number(sundayScheduledHours), actualHours:    Number(sundayActualHours) },
                    monday:    { scheduledHours: Number(mondayScheduledHours), actualHours:    Number(mondayActualHours) },
                    tuesday:   { scheduledHours: Number(tuesdayScheduledHours), actualHours:   Number(tuesdayActualHours) },
                    wednesday: { scheduledHours: Number(wednesdayScheduledHours), actualHours: Number(wednesdayActualHours) },
                    thursday:  { scheduledHours: Number(thursdayScheduledHours), actualHours:  Number(thursdayActualHours) },
                    friday:    { scheduledHours: Number(fridayScheduledHours), actualHours:    Number(fridayActualHours) },
                    saturday:  { scheduledHours: Number(saturdayScheduledHours), actualHours:  Number(saturdayActualHours) },
                    total_scheduled_hours: 0,
                    total_actual_hours: 0
                },
                weekNumber: weekNumber - 1 // account for zero based indexing
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <Box>
            <Typography variant="h6" textAlign="center" >Week # {weekNumber}</Typography>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography>Sunday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            disabled={isSubmitted}
                            value={sundayScheduledHours}
                            onChange={(e) => setSundayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            disabled={isSubmitted}
                            value={sundayActualHours}
                            onChange={(e) => setSundayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Monday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            disabled={isSubmitted}
                            value={mondayScheduledHours}
                            onChange={(e) => setMondayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={mondayActualHours}
                            disabled={isSubmitted}
                            onChange={(e) => setMondayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Tuesday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={tuesdayScheduledHours}
                            disabled={isSubmitted}
                            onChange={(e) => setTuesdayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={tuesdayActualHours}
                            disabled={isSubmitted}
                            onChange={(e) => setTuesdayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Wednesday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={wednesdayScheduledHours}
                            disabled={isSubmitted}
                            onChange={(e) => setWednesdayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={wednesdayActualHours}
                            disabled={isSubmitted}
                            onChange={(e) => setWednesdayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Thursday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={thursdayScheduledHours}
                            disabled={isSubmitted}
                            onChange={(e) => setThursdayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={thursdayActualHours}
                            disabled={isSubmitted}
                            onChange={(e) => setThursdayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Friday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={fridayScheduledHours}
                            disabled={isSubmitted}
                            onChange={(e) => setFridayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={fridayActualHours}
                            disabled={isSubmitted}
                            onChange={(e) => setFridayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Saturday</Typography>
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Scheduled Hours"
                            value={saturdayScheduledHours}
                            disabled={isSubmitted}
                            onChange={(e) => setSaturdayScheduledHours(e.target.value)}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            label="Actual Hours"
                            value={saturdayActualHours}
                            disabled={isSubmitted}
                            onChange={(e) => setSaturdayActualHours(e.target.value)}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
            <Button
                variant="contained"
                color="warning"
                disabled={isSubmitted}
                onClick={handleWeekUpdate}
            >
                Update Week
            </Button>
        </Box>
    );
}

export default Week;