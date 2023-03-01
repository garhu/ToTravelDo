// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ActivityCard({ activity }) {
  const navigate = useNavigate();

  if (activity === null) return null;

  const handleEditClick = () => {
    navigate(`/activities/${activity._id}/edit`);
  };

  const handleDeleteClick = () => {
    axios
      .delete(`http://localhost:4000/activities/${activity._id}`)
      .then(function (response) {
        navigate('/activities');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Card>
      <CardMedia component="img" image={activity.images[0]} alt={activity.name} />
      <CardContent>
        <Typography variant="h4" component="div">
          {activity.name}
        </Typography>
        <Typography gutterBottom color="text.secondary" sx={{ mb: 2.5 }}>
          {activity.location}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2.5 }}>
          {activity.description}
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleEditClick}>
          Edit Activity
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteClick}>
          Delete Activity
        </Button>
      </CardContent>
    </Card>
  );
}
