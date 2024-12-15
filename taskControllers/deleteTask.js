const fs = require("node:fs");

module.exports = (id) => {
  if (!id) {
    console.log("Usage: task-cli delete <id>");
    return;
  }

  fs.readFile("db.json", "utf-8", (err, data) => {
    const db = JSON.parse(data);

    const taskIndex = db.findIndex((task) => task.id === parseInt(id));
    if (taskIndex === -1) {
      console.log(`Output: Task not found: (ID:${id})`);
      return;
    } else {
      db.splice(taskIndex, 1);
    }

    fs.writeFile("db.json", JSON.stringify(db), (err) => {
      if (err) {
        console.log("Error writing to tasks database");
      } else {
        console.log(`Output: Task deleted successfully: (ID:${id})`);
      }
    });
  });
};
