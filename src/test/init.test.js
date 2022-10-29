const welcomeCli = require("../commands/init");
const pkg = require("../../package.json");

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
test("Verifying values in welcome object", () => {
	expect(welcomeText).toEqual({
		title: `DDF`,
		tagLine: `by Aldair André`,
		description: pkg.description,
		version: pkg.version,
		bgColor: "#843B85",
		color: "#000000",
		bold: true,
		clear: true
	});
});

test("Should show welcome message", () => {
	welcomeCli(welcomeText);
});
