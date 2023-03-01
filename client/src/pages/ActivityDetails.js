import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityDetailsCard from '../components/ActivityDetailsCard';
import { Grid } from '@mui/material';

function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/activities/${id}`)
      .then(function (response) {
        setActivity(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  // instead of xs={1} surrounding, maybe use Box?
  return (
    <Grid container spacing={4}>
      <Grid item xs={1}></Grid>
      <Grid item xs={5}>
        <ActivityDetailsCard activity={activity} />
      </Grid>
      <Grid item xs={5}>
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
          alt="map"
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default ActivityDetails;
