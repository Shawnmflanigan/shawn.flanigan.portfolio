import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

// css
import "./Portfolio.css"

// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";

import PortfolioItems from "./PortfolioItems";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
});

function PortfolioCard() {
  const classes = useStyles();

  return (
    <div
      width="100%"
      id="boxContainer"
    >
    <Card className={classes.root} variant="outlined" justify content="center">
      <CardContent>
        {PortfolioItems.map((PortfolioItems) => (
          <Card
            className={classes.root}
            class="portfolioItem"
            variant="outlined"
            key={PortfolioItems.id}
          >
            <h1>{PortfolioItems.name}</h1>
            <CardMedia
              className={classes.media}
              image={PortfolioItems.image}
              title={PortfolioItems.name}
            />

            <h2>Description</h2>
            <p>{PortfolioItems.description}</p>
            <h3>My Role</h3>
            <p>{PortfolioItems.myrole}</p>
            <CardActions>
              <div>
                <IconButton
                  color="primary"
                  aria-label="Github"
                  target="blank"
                  href={PortfolioItems.github}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Website"
                  target="blank"
                  href={PortfolioItems.link}
                >
                  <LanguageIcon />
                </IconButton>
              </div>
            </CardActions>
          </Card>
        ))}
      </CardContent>
    </Card>
    </div>
  );
}

export default PortfolioCard;
