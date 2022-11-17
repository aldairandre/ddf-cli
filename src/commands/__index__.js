const cli =  require("../utils/cli")
const ola = require("./ola");

module.exports = input => {

	// ---> Command Ola

	if (input.includes("ola") || input.includes("o")) {
		return ola("Ola");
	}else {
    cli.showHelp(0)
  }
};
