import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewActivityForm() {
  const [activity, setActivity] = useState({ name: '', location: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // make validations
    event.preventDefault();
    axios
      .post('http://localhost:4000/activities', activity)
      .then(function (response) {
        navigate('/activities');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <Grid container spacing={2} sx={{ textAlign: 'center' }}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Typography variant="h3">New Activity</Typography>
        <Box component="form" noValidate>
          <TextField
            required
            fullWidth
            id="outlined-required"
            value={activity.name}
            name="name"
            label="Activity Name"
            margin="normal"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            value={activity.location}
            name="location"
            label="Location"
            margin="normal"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <TextField
            required
            fullWidth
            id="outlined-multiline-static"
            value={activity.description}
            name="description"
            label="Description"
            multiline
            rows={4}
            margin="normal"
            onChange={handleChange}
          />
          <Button fullWidth type="submit" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}

export default NewActivityForm;
