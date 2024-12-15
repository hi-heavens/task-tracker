#!/usr/bin/env node

const argv = process.argv.slice(2);
const addTask = require("./utils/addTask");
const deleteTask = require("./utils/deleteTask");
const updateTask = require("./utils/updateTask");
const inProgress = require("./utils/inProgress");

console.log(argv.length);
if (argv.length < 4) {
  const action = argv[0];
  if (action === "add") {
    addTask(argv[1]);
  } else if (action === "update") {
    updateTask(argv[1], argv[2]);
  } else if (action === "delete") {
    deleteTask(argv[1]);
  } else if (action === "mark-in-progress") {
    inProgress(argv[1]);
  }
} else {
  console.log("Usage: task-cli <action> <args>");
}
