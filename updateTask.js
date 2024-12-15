const fs = require("node:fs");
const currentDate = require("./currentDate");

module.exports = (id, newDescription) => {
  if (!id || !newDescription) {
    console.log("Usage: task-cli update <id> <task>");
    return;
  }

  fs.readFile("db.json", "utf-8", (err, data) => {
    const db = JSON.parse(data);

    const taskIndex = db.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
      console.log("Output: Task not found");
      return;
    } else {
      db[taskIndex] = {
        ...db[taskIndex],
        description: newDescription,
        updatedAt: currentDate,
      };
    }

    fs.writeFile("db.json", JSON.stringify(db), (err) => {
      if (err) {
        console.log("Error writing to tasks database");
      } else {
        console.log(
          `Output: Task updated successfully: (ID:${db[taskIndex].id})`
        );
      }
    });
  });
};
