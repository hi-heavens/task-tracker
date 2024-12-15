#!/usr/bin/env node

const argv = process.argv.slice(2);
const addTask = require("./taskControllers/addTask");
const listTasks = require("./taskControllers/listTasks");
const deleteTask = require("./taskControllers/deleteTask");
const updateTask = require("./taskControllers/updateTask");
const inProgress = require("./taskControllers/inProgress");

if (argv.length < 4) {
  const action = argv[0];
  if (action === "add") addTask(argv[1]);
  else if (action === "update") updateTask(argv[1], argv[2]);
  else if (action === "delete") deleteTask(argv[1]);
  else if (action === "mark-in-progress") inProgress(argv[1]);
  else if (action === "mark-done") console.log("mark-done");
  else if (action === "list") listTasks(argv[1]);
} else {
  console.log("Usage: task-cli <action> <args>");
}
