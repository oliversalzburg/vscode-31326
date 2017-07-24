"use strict";

const chalk = require("chalk");
const SimpleGit = require("simple-git");

const git = new SimpleGit(process.cwd());

process.stdout.write(chalk.cyan("color\n"));
git
  .silent(true)
  .commit("noop", [], {
    "--allow-empty": true
  }, error => {
    // This console.log statement is not relevant to the issue
    console.log(error);
    process.stdout.write(chalk.cyan("color\n"));
  });
