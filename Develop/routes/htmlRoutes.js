const path = require("path");

module.exports = (app) => {
  app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/notes.html"));
  });
};
