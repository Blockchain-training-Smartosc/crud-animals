const express = require("express");

const app = express();

app.use(express.json());

require("./routes")(app);

const PORT = 3333;

app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});

// globals
global.animals = [];
