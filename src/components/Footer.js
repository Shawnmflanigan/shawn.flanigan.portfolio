import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Toolbar';
import './Footer.css'



export default function Footer() {
    return (
        <AppBar position="static" color="transparent" id="foot">
          <Container>
            <Toolbar>
              <Typography variant="body3" color="inherit">
                © 2021 Shawn Flanigan
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}