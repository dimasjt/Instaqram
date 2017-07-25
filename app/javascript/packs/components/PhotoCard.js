import React from "react"
import Card, { CardContent, CardMedia } from "material-ui/Card"
import { Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"

const styleSheet = createStyleSheet("PhotoCard", (theme) => ({
  root: {
    marginBottom: "15px",
  },
}))

class PhotoCard extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Card className={classes.root}>
        <CardMedia>
          <img src={"https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg"} alt="Reptile" />
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h3">Dimas</Typography>
          <Typography component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica</Typography>
        </CardContent>
      </Card>
    )
  }
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(PhotoCard)
