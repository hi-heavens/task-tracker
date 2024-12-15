#!/usr/bin/env node

const argv = process.argv.slice(2);
const addTask = require("./addTask");
const deleteTask = require("./deleteTask");
const updateTask = require("./updateTask");

console.log(argv.length);
if (argv.length < 4) {
  const action = argv[0];
  if (action === "add") {
    addTask(argv[1]);
  } else if (action === "update") {
    updateTask(argv[1], argv[2]);
  } else if (action === "delete") {
    deleteTask(argv[1]);
  }
} else {
  console.log("Usage: task-cli <action> <args>");
}
