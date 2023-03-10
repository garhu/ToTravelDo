import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ActivityCard from './ActivityCard';

export default function ActivityList({ activities }) {
  const renderedActivities = activities.map((activity) => {
    return (
      <Grid item xs={4} key={activity._id}>
        <ActivityCard activity={activity} />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {renderedActivities}
      </Grid>
    </Box>
  );
}
