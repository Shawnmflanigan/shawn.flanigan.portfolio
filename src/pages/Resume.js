import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Resume from "../images/resume.jpg";
import Resume2 from "../images/resume2.jpg"
import '../components/ProfileCard.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 800,
    width: 500,
  },
});

export default function ResumePage() {
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
            image={Resume}
            title="Resume 1st"
          />
          <CardMedia
            className={classes.media}
            image={Resume2}
            title="Resume 2nd"
          />
        </CardActionArea>
        </Card>
        </div>
  )
};
