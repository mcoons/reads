
const express = require("express");
// const cors = require("cors");
const queries = require("./queries");
const routes = require("./routes");
// const methodOverride = require("method-override");
const localport = 3005;
const port = process.env.PORT || localport;
const database = require("./database-connection");

const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(cors);
// app.use(express.static('public'));
// app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.listen(port, () => console.log(`Server is now listening on port ${port}`));

module.exports = {app};
