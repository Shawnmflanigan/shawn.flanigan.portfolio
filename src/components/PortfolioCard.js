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
import Expense from "../images/expenseTracker.gif"
import Mad from "../images/madLibs.gif"
import Wimpys from "../images.wimpys.gif"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProfileCard() {
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
                  Castaway: Flight of the Pheonix
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Portfolio Place holder
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton color="primary" aria-label="Github">
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
                  About Me:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Portfolio Place holder
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton color="primary" aria-label="Github">
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
                image={Expense}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  About Me:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Portfolio Place holder
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton color="primary" aria-label="Github">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Deployed Site">
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
                  Castaway: Flight of the Pheonix
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Portfolio Place holder
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton color="primary" aria-label="Github">
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
                image={Wimpys}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  About Me:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Portfolio Place holder
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton color="primary" aria-label="Github">
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
                image={Exercise}
                title="Profile Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  About Me:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Portfolio Place holder
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton color="primary" aria-label="Github">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Deployed Site">
                <LanguageIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
