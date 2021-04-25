import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
// card images
import Castaway from "../images/castaway.gif";
import Employee from "../images/employeeDirectory.gif";
import Grid from "@material-ui/core/Grid";
import Exercise from "../images/exercise.gif";
import Expense from "../images/expenseTracker.gif";
import Mad from "../images/madLibs.gif";
import Wimpys from "../images/wimpys.gif";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function handleClick({ href }) {
  IconButton = { href };
}

export default function PortfolioCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Castaway}
                title="Project Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Castaway
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A CYOA game using express, sequelize, express handlebars, and
                  css/js animations.
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                color="primary"
                aria-label="Github"
                target="blank"
                href="https://github.com/Shawnmflanigan/CYOA"
                onclick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Deployed Site">
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Employee}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Employee Directory Search
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application allows the user to sort and search all
                  employees in a company by multiple criteria; it was built
                  using React and React-Bootstrap. Additional dependancies are
                  listed in the dependancy section.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                color="primary"
                aria-label="Github"
                target="blank"
                href="https://github.com/Shawnmflanigan/employee-directory"
                onclick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="Deployed Site"
                target="blank"
                href="https://your-employees.herokuapp.com/"
                onclick={handleClick}
              >
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Expense}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Expense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application uses service worker, express, mongoDB, and
                  JQuery to allow the user to track their budget over time both
                  online and offline.
                  <br />
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                color="primary"
                aria-label="Github"
                target="blank"
                href="https://github.com/Shawnmflanigan/expenseTracker"
                onclick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="Deployed Site"
                target="blank"
                href="https://stark-island-01770.herokuapp.com/"
                onclick={handleClick}
              >
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Mad}
                title="Project Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Mad Libz
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A whimisical web application which allows a user to play the
                  classic mad libs game with random stories. Built using JS,
                  HTML, Bulma CSS and an open source API.
                  <br />
                  <br />
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                color="primary"
                aria-label="Github"
                target="blank"
                href="https://github.com/Shawnmflanigan/MadLibz-1"
                onclick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="Deployed Site"
                target="blank"
                href="https://teammadlibz.github.io/MadLibz/"
                onclick={handleClick}
              >
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Wimpys}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Wimpy's Burgers
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application uses handlebars, express, a MySQL database
                  and a custom ORM to handle user input on the main interface.
                  This project follows the MVC pattern. The deployed site
                  illustrates these operations by allowing a user to 'create'
                  and 'destroy'(eat) burgers and displays the eaten burgers in
                  another column.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                color="primary"
                aria-label="Github"
                target="blank"
                href="https://github.com/Shawnmflanigan/welcome_to_wimpys"
                onclick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="Deployed Site"
                target="blank"
                href="https://wimpys.herokuapp.com/"
                onclick={handleClick}
              >
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Exercise}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Exercise Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application uses mongodb, javascript, and RESTfull design
                  to allow the user to add, track, and view exercises.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                color="primary"
                aria-label="Github"
                target="blank"
                href="https://github.com/Shawnmflanigan/exerciseapp"
                onclick={handleClick}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="Deployed Site"
                target="blank"
                href="https://stormy-sea-50426.herokuapp.com/?id=605e3aff8295c90015ecefc0"
                onclick={handleClick}
              >
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
