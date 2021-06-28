import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";

// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";

import PortfolioItems from "./PortfolioItems";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function PortfolioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        {PortfolioItems.map((PortfolioItems) => (
          <Card
            className={classes.root}
            variant="outlined"
            key={PortfolioItems.id}
          >
            <h1>{PortfolioItems.name}</h1>
            <img alt={PortfolioItems.name} src={PortfolioItems.image}></img>
            <h2>Description</h2>
            <p>{PortfolioItems.description}</p>
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
                <IconButton color="primary" aria-label="Website" target="blank" href={PortfolioItems.link}>
                  <LanguageIcon />
                </IconButton>
              </div>
            </CardActions>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

export default PortfolioCard;
