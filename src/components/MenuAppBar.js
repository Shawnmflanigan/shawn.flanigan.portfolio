import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Box } from '@material-ui/core';

function handleClick({href}) {
  Link={href};
}

export default function MenuAppBar() {
  return (
    <Box width="100%" display="flex" justifyContent="center" m={4} p={4} bgcolor="background.paper">
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/about" onClick={handleClick}>
        About
      </Link>
      <Link color="inherit" href="/portfolio" onClick={handleClick}>
        Portfolio
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Breadcrumb
      </Link>
    </Breadcrumbs>
    </Box>
  );
}
