const fs = require("node:fs");
const currentDate = require("./currentDate");

module.exports = (id) => {
  if (!id) {
    console.log("Usage: task-cli mark-in-progress <id>");
    return;
  }

  fs.readFile("db.json", "utf-8", (err, data) => {
    const db = JSON.parse(data);

    const taskIndex = db.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
      console.log(`Output: Task not found: (ID:${id})`);
      return;
    } else {
      db[taskIndex] = {
        ...db[taskIndex],
        status: "in-progress",
        updatedAt: currentDate,
      };
    }

    fs.writeFile("db.json", JSON.stringify(db), (err) => {
      if (err) {
        console.log("Error writing to tasks database");
      } else {
        console.log(`Output: Task marked as in-progress: (ID:${id})`);
      }
    });
  });
};
