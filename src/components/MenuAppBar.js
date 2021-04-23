import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Box } from '@material-ui/core';
import './MenuAppBar.css'

function handleClick({href}) {
  Link={href};
}

export default function MenuAppBar() {
  return (
    <Box width="100%" display="flex" justifyContent="center" m={4} p={4} bgcolor="background.transparent">
    <Breadcrumbs aria-label="breadcrumb" id="nav">
      <Link color="inherit" href="/about" onClick={handleClick}>
        About
      </Link>
      <Link color="inherit" href="/portfolio" onClick={handleClick}>
        Portfolio
      </Link>
    </Breadcrumbs>
    </Box>
  );
}
