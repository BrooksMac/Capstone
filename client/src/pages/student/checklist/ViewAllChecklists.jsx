import { Box, Typography, Grid } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import StudentChecklistCard from '../../../components/student/checklist/StudentChecklistCard';

export default function ViewAllChecklists() {
    const checklistData = useLoaderData();
    return (
        <Box p={4}>
            <Typography variant="h3">Checklists</Typography>
            <Grid container spacing={2}>
                {checklistData &&
                    checklistData
                        .sort((a, b) => {
                            if (a.name.split(' ')[1] < b.name.split(' ')[1]) {
                                return -1;
                            } else {
                                return 1;
                            }
                        })
                        .map((checklist) => (
                            <Grid key={checklist._id} item>
                                <StudentChecklistCard checklist={checklist} />
                            </Grid>
                        ))}
            </Grid>
        </Box>
    );
}

export const viewAllChecklistsLoader = async ({ params }) => {
    //Get the currently logged in user's ID and the list of their checklists
    const auth = JSON.parse(localStorage.getItem('auth')).result;
    const checklistRes = await fetch(`http://papiris-api.onrender.com/api/weeks/user/${auth._id}`);

    if (!checklistRes.ok) {
        console.log('Error getting that users checklists');
    }

    return await checklistRes.json();
};
