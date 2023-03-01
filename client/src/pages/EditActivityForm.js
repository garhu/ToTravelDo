import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditActivityForm() {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // pre-populate the data
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

  if (activity === null) return null;

  const handleChange = (event) => {
    setActivity({ ...activity, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // make validations
    event.preventDefault();
    axios
      .put(`http://localhost:4000/activities/${id}`, activity)
      .then(function (response) {
        navigate(`/activities/${id}`);
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
        <Typography variant="h3">Edit Activity</Typography>
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

export default EditActivityForm;
