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
import Box from "@material-ui/core/Box";
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

function handleClick({ href }) {
  IconButton = { href };
}

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      bgcolor="background.transparent"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            color="primary"
            aria-label="Github"
            target="blank"
            href="https://github.com/Shawnmflanigan"
            onclick={handleClick}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="LinkedIn"
            target="blank"
            href="https://www.linkedin.com/in/shawnmflanigan/"
            onclick={handleClick}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Email"
            target="blank"
            href="mailto:shawnmflanigan@gmail.com"
            onclick={handleClick}
          >
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
