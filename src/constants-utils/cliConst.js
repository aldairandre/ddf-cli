const meowHelp = require("cli-meow-help");

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	ola: {
		type: `boolean`,
		alias: `o`,
		default: true,
		desc: `Print Ola`
	}
};

const commands = {
	help: { desc: `Print help info` },
	ola: { desc: `Print Ola` }
};

const helpText = meowHelp({
	name: `ddf`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = {
	flags: flags,
	commands: commands,
	helpText: helpText,
	options: options
};
