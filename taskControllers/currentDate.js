module.exports = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
