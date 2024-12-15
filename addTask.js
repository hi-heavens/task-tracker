const fs = require("node:fs");
const currentDate = require("./currentDate");

module.exports = (task) => {
  fs.readFile("db.json", "utf-8", (err, data) => {
    const db = JSON.parse(data);
    const lastId = db[db.length - 1]?.id || 0;

    const item = {
      id: lastId + 1,
      description: task,
      status: "todo",
      createdAt: currentDate,
      updatedAt: currentDate,
    };

    db.push(item);

    fs.writeFile("db.json", JSON.stringify(db), (err) => {
      if (err) {
        console.log("Error writing to tasks database");
      } else {
        console.log(`Task added successfully: (ID:${item.id})`);
      }
    });
  });
};
