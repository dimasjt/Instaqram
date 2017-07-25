import React from "react"
import Card, { CardContent, CardMedia, CardHeader } from "material-ui/Card"
import { Typography, Avatar } from "material-ui"
import { withStyles, createStyleSheet } from "material-ui/styles"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const styleSheet = createStyleSheet("PhotoCard", (theme) => ({
  root: {
    marginBottom: "15px",
  },
  block: {
    display: "block",
  },
}))

class PhotoCard extends React.Component {
  isShowed(component) {
    return this.props.onlyMedia ? null : component
  }
  render() {
    const { classes, raised } = this.props

    const avatar = <Avatar src="https://material-ui-1dab0.firebaseapp.com/build/b16427bb030d63fd8e52ea84defda1d1.jpg" alt="Profile" />
    const username = <Link to={"/users/dimasjt"}>dimasjt</Link>

    return (
      <Card className={classes.root} raised={raised}>
        {this.isShowed(
          <CardHeader
            avatar={avatar}
            title={username}
            subheader="30 Feb 2017"
          />,
        )}
        <CardMedia>
          <img
            src={"https://material-ui-1dab0.firebaseapp.com/build/abd50bc0e11052fea9669f18f0c017bc.jpg"}
            alt="Reptile"
            className={classes.block}
          />
        </CardMedia>

        {this.isShowed(
          <CardContent>
            <Typography type="headline" component="h3">Dimas</Typography>
            <Typography component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica</Typography>
          </CardContent>,
        )}
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
