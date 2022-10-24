const meow = require("meow");
const meowHelp = require("cli-meow-help");
const pkg = require("../../package.json");

//const cliName = `${pkg.name}`;

const commands = {
	ola: { desc: `Type on your terminal Hello DDF` }
};

const flags = {
	help: {
		type: `boolean`,
		default: true,
		alias: `h`,
		desc: `Show the help guideline`
	}
};

const textHelp = meowHelp({
	name: "ddf",
	desc: `use flag -h || help to get more info`,
	commands: commands,
	flags
});

const options = {
	inferType: true,
	description: true,
	hardRejection: false,
	flags
};

module.exports = meow(textHelp,options)
