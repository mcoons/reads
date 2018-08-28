
const express = require("express");
// const cors = require("cors");
const queries = require("./queries");
// const methodOverride = require("method-override");
const localport = 3005;
const port = process.env.PORT || localport;
// const database = require("./database-connection");

const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(cors);
app.use(express.static('public'));
// app.use(methodOverride("_method"));
app.set("view engine", "ejs");


// app.get("/", (request, response) => {
//     queries
//     .list()
//     .then(record => response.send(record))
//     // response.send("Server is working!! - Base route");
//   });

  app.get("/", (request, response) => {
    response.render("index")
  });


  app.get("/books", (request, response) => {
    queries
    .books()
    // .then(record => response.send(record))
    .then(books => { console.log("books: ", books);
                     response.render( "bookview", { books: books, url:"bookview" }); })
  });

  app.get("/books/:book", (request, response) => {
    queries
    .readBook('id', request.params.book)
    .then(books => { console.log("books: ", books);
                     response.render( "bookview", { books: books, url:"bookview" }); })
  });

  app.get("/books/new", (request, response) => {
    response.send("Server is working!! - New book route");
  });

  app.get("/books/:book/edit", (request, response) => {
    response.send("Server is working!! - Edit book route");
  });

  app.get("/books/:book/delete", (request, response) => {
    response.send("Server is working!! - Delete book route");
  });

  app.get("/authors", (request, response) => {
    response.send("Server is working!! - Base authors route");
  });

  app.get("/authors/:author", (request, response) => {
    response.send("Server is working!! - Specific author route");
  });

  app.get("/authors/new", (request, response) => {
    response.send("Server is working!! - New author route");
  });

  app.get("/authors/:author/edit", (request, response) => {
    response.send("Server is working!! - Edit author route");
  });

  app.get("/authors/:author", (request, response) => {
    response.send("Server is working!! - Delete author route");
  });


















app.listen(port, () => console.log(`Server is now listening on port ${port}`));

module.exports = {app};
