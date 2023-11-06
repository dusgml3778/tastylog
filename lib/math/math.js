const roundTo = require("round-to");

var padding = function (values) {
  if (isNaN(parseFloat(values))) {
    return "-";
  }

  return roundTo(values, 2).toPrecision(3);
};

var round = function (values) {
  return roundTo(values, 2);
};

module.exports = {
  padding,
  round
};