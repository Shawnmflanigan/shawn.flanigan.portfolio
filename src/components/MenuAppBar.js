import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import './MenuAppBar.css'

function handleClick({href}) {
  Link={href};
}

export default function MenuAppBar() {
  return (
    <div
      width="100%"
      display="flex"
      id="boxContainer"
    >
    <Breadcrumbs aria-label="breadcrumb" id="nav">
      <Link color="inherit" href="/about" onClick={handleClick}>
        About
      </Link>
      <Link color="inherit" href="/portfolio" onClick={handleClick}>
        Portfolio
      </Link>
      <Link color="inherit" href="/resume" onClick={handleClick}>
        Resume
      </Link>
    </Breadcrumbs>
    </div>
  );
}
