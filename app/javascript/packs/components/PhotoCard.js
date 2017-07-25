import React from "react"
import Card, { CardContent, CardMedia } from "material-ui/Card"
import { Typography } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"

const styleSheet = createStyleSheet("PhotoCard", (theme) => ({
  root: {
    marginBottom: "15px",
  },
  block: {
    display: "block",
  },
}))

class PhotoCard extends React.Component {
  render() {
    const { classes, raised, onlyMedia } = this.props

    return (
      <Card className={classes.root} raised={raised}>
        <CardMedia>
          <img
            src={"https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg"}
            alt="Reptile"
            className={classes.block}
          />
        </CardMedia>
        {
          onlyMedia ? null : (
            <CardContent>
              <Typography type="headline" component="h3">Dimas</Typography>
              <Typography component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica</Typography>
            </CardContent>
          )
        }
      </Card>
    )
  }
}

PhotoCard.defaultProps = {
  onlyMedia: false,
  raised: false,
}

PhotoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  onlyMedia: PropTypes.bool,
  raised: PropTypes.bool,
}

export default withStyles(styleSheet)(PhotoCard)
