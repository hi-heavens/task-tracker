const fs = require("node:fs");

module.exports = (status) => {
  if (!status) {
    fs.readFile("db.json", "utf-8", (err, data) => {
      const db = JSON.parse(data);
      console.log("List of tasks:");
      console.log("-----------------------------------------------");

      db.forEach((task) => {
        console.log(
          `${task.id} | ${task.description} | ${task.status} | ${task.createdAt}`
        );
      });
    });
  } else if (["done", "todo", "in-progress"].includes(status)) {
    fs.readFile("db.json", "utf-8", (err, data) => {
      const db = JSON.parse(data);
      console.log("List of tasks:");
      console.log("-----------------------------------------------");
      db.forEach((task) => {
        if (task.status === status) {
          console.log(
            `${task.id} | ${task.description} | ${task.status} | ${task.createdAt}`
          );
        }
      });
    });
  } else {
    console.log("Usage: task-cli list <status>");
  }
};
