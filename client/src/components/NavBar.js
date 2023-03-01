import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="fixed" id="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/activities">
              <span className="logo">
                <Icon id="logo-icon" icon="material-symbols:travel-explore" />
                ToTravelDo
              </span>
            </StyledLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to="/activities/new">New Activity</StyledLink>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
