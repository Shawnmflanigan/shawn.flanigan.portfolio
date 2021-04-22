import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WorkIcon from "@material-ui/icons/Work";
import profileImage from "../images/profileImage.png"
import Box from '@material-ui/core/Box';

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
    <Box width={500} display="flex" justifyContent="center" m={4} p={4} bgcolor="background.paper">
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {profileImage}
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
        <IconButton color="primary" aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Email">
          <MailOutlineIcon />
        </IconButton>
        <IconButton color="primary" aria-label="Resume">
          <WorkIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  );
}
