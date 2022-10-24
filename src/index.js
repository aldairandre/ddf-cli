#!/usr/bin/env node

/**
 * DDF
 * Delete Duplicate Files CLI
 *
 * @author Aldair André <https://github.com/aldairandre>
 */

const init = require("./commands/init");
const cli = require("./commands/cli");

const input = cli.input;
const flags = cli.flags;
const {clear} = flags;

(() => {
	init({clear});
	input.includes('help') && cli.showHelp(0)
})();
