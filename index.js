#!/usr/bin/env node

const argv = process.argv.slice(2);
const addTask = require("./addTask");
const updateTask = require("./updateTask");

if (argv.length < 2) {
  console.log("Usage: task-cli <command> <args>");
} else if (argv[0] === "add") {
  const description = argv[1];
  addTask(description);
} else if (argv[0] === "update") {
  const id = argv[1];
  const newDescription = argv[2];

  if (!id || !newDescription) {
    console.log("Usage: task-cli update <id> <task>");
  } else {
    updateTask(id, newDescription);
  }
}
