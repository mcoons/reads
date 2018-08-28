const express = require("express");
const queries = require("./queries");
const methodOverride = require("method-override");
const localport = 3005;
const port = process.env.PORT || localport;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

  app.get("/", (request, response) => {
    response.render("index")
  });


  app.get("/books", (request, response) => {
    queries
    .books()
    .then(books => { response.render( "bookview", { books: books, url:"bookview", authors: queries.authors().author }); })
  });

  app.get("/books/:book", (request, response) => {
    queries
    .readBook('id', request.params.book)
    .then(books => { response.render( "bookview", { books: books, url:"bookview" }); })
  });



  app.get("/authors", (request, response) => {      
    queries
    .authors()
    .then(authors => { response.render( "authorview", { authors: authors, url:"authorview" }); })
});

  app.get("/authors/:author", (request, response) => {
    queries
    .readAuthor('id', request.params.author)
    .then(authors => { response.render( "authorview", { authors: authors, url:"authorview" }); })
  });



  app.get("/books/new", (request, response) => {
    response.send("Server is working!! - New book route");
  });

  app.get("/books/:book/edit", (request, response) => {
    response.send("Server is working!! - Edit book route");
  });


  app.get("/books/:book/delete", (request, response) => {
    queries
    .readBook('id', request.params.book)
    .then(books => { response.render( "bookdelete", { books: books, url:"bookview" }); })
  });


  app.delete("/books/:id", (request, response, next) => {
    queries
    .deleteBook(request.params.id)
    .then(response.redirect("/books"))
    .catch(next);
    
  });


  app.get("/authors/new", (request, response) => {
    response.send("Server is working!! - New author route");
  });

  app.get("/authors/:author/edit", (request, response) => {
    response.send("Server is working!! - Edit author route");
  });

  app.get("/authors/:author/delete", (request, response) => {
    response.send("Server is working!! - Delete author route");
  });


















app.listen(port, () => console.log(`Server is now listening on port ${port}`));

module.exports = {app};
