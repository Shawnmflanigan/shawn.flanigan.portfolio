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
import profileImage from "../images/profileImage.png";
import Resume from "../images/resume.jpg"
import "./ProfileCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
    width: 500,
  },
});

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <div
      width="100%"
      id="boxContainer"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={profileImage}
            title="Profile Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              About Me:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Current student at the University of Oregon's full stack web development coding bootcamp. I graduated from Reed College in 2012 with a degree in Political Science focusing primarily on modeling voter behavior.
              <br />  <br />  
              I worked in sales for a few years after graduation and have since discovered a passion for all aspects of web development; from back-end to front-end.
              <br />  <br /> 
              I currently live in Portland, Oregon with my wonderful partner, three beautiful children, and
              our spitfire cat.
              <br />  <br /> 
              If you have any questions, or would like to connect on a project, please feel free to reach out to me via the links below.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            color="primary"
            aria-label="Github"
            target="blank"
            href="https://github.com/Shawnmflanigan"
            
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="LinkedIn"
            target="blank"
            href="https://www.linkedin.com/in/shawnmflanigan/"
            
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Email"
            target="blank"
            href="mailto:shawnmflanigan@gmail.com"
            
          >
            <MailOutlineIcon />
          </IconButton>
          <IconButton color="primary"
            aria-label="Resume"
            target="blank"
            href ={Resume}
            >
            <WorkIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
