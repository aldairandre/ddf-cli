const meow = require("meow");
const { helpText, options } = require("../constants-utils/cliConst");

module.exports = meow(helpText, options);
