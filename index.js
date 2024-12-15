#!/usr/bin/env node

const argv = process.argv.slice(2);
const addTask = require("./addTask");
const updateTask = require("./updateTask");

console.log(argv.length);
if (argv.length < 4) {
  const action = argv[0];
  if (action === "add") {
    addTask(argv[1]);
  } else if (action === "update") {
    updateTask(argv[1], argv[2]);
  }
} else {
  console.log("Usage: task-cli <action> <args>");
}
