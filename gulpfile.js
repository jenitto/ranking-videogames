// https://github.com/blueberryapps/react-svg-icon-generator

const path = require("path");
const configureSvgIcon = require("react-svg-icon-generator").default;

configureSvgIcon({
  destination: path.join(__dirname, "src", "components", "Icon.js"),
  svgDir: "src/assets/icons/306752-gaming/svg",
  keepFillColor: true,
});
