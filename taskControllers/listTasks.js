const fs = require("node:fs");

module.exports = (status) => {
  console.log(status);
  console.log("List of tasks:");
  console.log("ID | Description | Status | Created At");
  console.log("--------------------------------------");

  fs.readFile("db.json", "utf-8", (err, data) => {
    const db = JSON.parse(data);
    db.forEach((task) => {
      console.log(
        `${task.id} | ${task.description} | ${task.status} | ${task.createdAt}`
      );
    });
  });
};
