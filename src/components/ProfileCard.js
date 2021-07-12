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
            I recently received my Full Stack Web Development certificate from the University of Oregon bootcamp. I have a particular interest in database management, security, and UX but enjoy most all elements of development and engineering.
              <br />  <br />  
              I graduated from Reed College with a degree in Political Science primarily focusing on large scale voter behavior and building predictive models. While at Reed I worked as a research assistant for the Early Voting Information Center helping to build out the front facing web application and as an Editorial Assistant for the Election Law Journal.

              <br />  <br /> 
              As an eager learner and natural helper, I’m excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help your team to continue to develop innovative and enticing work.
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
