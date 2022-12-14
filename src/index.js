#!/usr/bin/env node

/**
 * DDF
 * Delete Duplicate Files CLI
 *
 * @author Aldair André <https://github.com/aldairandre>
 */

const init = require("./utils/init");
const cli = require("./utils/cli");
const log = require("./utils/log");
const inputValidator = require("./commands/__index__");

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	inputValidator(input)
	debug && log(flags);
})();
