const welcomeCli = require("cli-welcome");
const pkg = require("../../package.json");
const unhandled = require("cli-handle-unhandled");

const welcomeText = {
	title: `DDF`,
	tagLine: `by Aldair André`,
	description: pkg.description,
	version: pkg.version,
	bgColor: "#843B85",
	color: "#000000",
	bold: true,
	clear: true
};

module.exports = () => {
	unhandled();
	welcomeCli(welcomeText);
};
