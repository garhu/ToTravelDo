// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ActivityCard({ activity }) {
  if (activity === null) return null;

  return (
    <Link to={`/activities/${activity._id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={activity.images[0]} alt={activity.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {activity.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {activity.location}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
