const database = require("./database-connection");

module.exports = {

//   list() {
//     return database("book")
//       .select();
//   }

list(){
    return database("book_author")
    .join('book', 'book.id', '=', 'book_author.book_id')
    .join('author', 'author.id', '=', 'book_author.author_id')
    .select('book_author.book_id', 
            'book_author.author_id',
            'book.title',
            'book.genre',
            'book.description',
            'book.cover',
            'author.first_name',
            'author.last_name',
            'author.biography',
            'author.portrait')
},


books(){
    return database("book")
},

authors(){
    return database("author")
},

readBook(attribute, value) {
    return database("book")
    .select()
    .where(attribute, value);
},

authorByBook(book_id){
    return database("book_author")
    .join('author', 'author.id', '=', 'book_author.author_id')
    .select('book_author.book_id', 
            'book_author.author_id',
            'book.title',
            'author.first_name',
            'author.last_name',
            'author.biography',
            'author.portrait')
    .where('book_author.book_id',book_id)
},

bookByAuthor(author_id){
    return database("book_author")
    .join('book', 'book.id', '=', 'book_author.book_id')
    .select('book_author.book_id', 
            'book_author.author_id',
            'book.title',
            'author.first_name',
            'author.last_name',
            'author.biography',
            'author.portrait')
    .where('book_author.book_id',book_id)
}




}
