const welcome = require("cli-welcome");
const pkg = require("../../package.json");

module.exports = ({clear = true}) => {
	welcome({
		title: `DDF`,
		tagLine: `by Aldair André`,
    description: pkg.description,
		version: pkg.version,
		bgColor: '#843B85',
		color: '#000000',
		bold: true,
		clear
	});
};
