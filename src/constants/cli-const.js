const pkg = require("../../package.json");

const cliName = `${pkg.name}`;

const commands = {
	ola: { desc: `Type on your terminal Hello DDF` }
};

const flags = {
	help: {
		type: `boolean`,
		default: true,
		alias: `h`,
		desc: `Show the help guideline`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		default: false,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const examples = [
	{
		command: `new`,
		flags: ["help", "debug"],
	}
];

module.exports = {
	cliName,
	commands,
	flags,
	examples
};
