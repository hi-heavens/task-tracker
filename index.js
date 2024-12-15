#!/usr/bin/env node

const argv = process.argv.slice(2);
const addTask = require("./addTask");

if (argv.length < 2) {
  console.log("Usage: task-cli <command> <args>");
} else if (argv[0] === "add") {
  const task = argv[1];
  addTask(task);
}
