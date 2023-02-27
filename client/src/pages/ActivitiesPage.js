import { useState, useEffect } from 'react';
import ActivityList from '../components/ActivityList';
import { Grid } from '@mui/material';
import axios from 'axios';

function ActivitiesPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = () => {
    axios
      .get('http://localhost:4000/activities')
      .then(function (response) {
        console.log(response);
        setActivities(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <ActivityList activities={activities} />
      </Grid>
      <Grid item xs={5}>
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="map"
        />
      </Grid>
    </Grid>
  );
}

export default ActivitiesPage;
