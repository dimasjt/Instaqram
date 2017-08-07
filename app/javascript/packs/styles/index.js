import blue from "material-ui/colors/blue"
import blueGrey from "material-ui/colors/blueGrey"
import createPalette from "material-ui/styles/palette"

export default {
  palette: createPalette({
    primary: blue,
    accent: blueGrey,
  }),
  lighter: blue[50],
  light: blue[500],
  dark: blue[900],
  upload: {
    wrapper: {
      height: "300px",
      width: "360px",
      border: "none",
      marginBottom: "30px",
    },
    placeholder: {
      width: "100%",
      height: "100%",
      cursor: "pointer",
      textAlign: "center",
    },
    placeholderText: {
      lineHeight: "300px",
      textAlign: "center",
    },
  },
}
