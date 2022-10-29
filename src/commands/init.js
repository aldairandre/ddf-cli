const welcomeCli = require("cli-welcome");
const pkg = require('../../package.json')

const welcomeText = {
  title: `DDF`,
	tagLine: `by Aldair André`,
	description: pkg.description,
	version: pkg.version,
	bgColor: '#843B85',
	color: '#000000',
	bold: true,
	clear: true
}

module.exports = () =>  welcomeCli(welcomeText);
