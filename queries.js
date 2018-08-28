const database = require("./database-connection");

module.exports = {

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
    let retval = database("book")
    // console.log(retval);
    return retval;;
},

authors(){
    return database("author");
},

readBook(attribute, value) {
    return database("book")
    .select()
    .where(attribute, value);
},

readAuthor(attribute, value) {
    return database("author")
    .select()
    .where(attribute, value);
},



authorByBook(book_id){
    return database("book_author")
    .join('author', 'author.id', '=', 'book_author.author_id')
    .select('book_author.book_id', 
            'book_author.author_id',
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
            'book.title')
    .where('book_author.author_id',author_id)
},


deleteBook(id) {
    return database("book")
        .delete()
        .where("id", id);
},

deleteAuthor(id) {
    return database("author")
        .delete()
        .where("id", id);
}



}
