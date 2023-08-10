let books = [
    { title: "Book 1", author: "Author 1", year: 2005 },
    { title: "Book 2", author: "Author 2", year: 2015 },
    { title: "Book 3", author: "Author 3", year: 2009 },
    { title: "Book 4", author: "Author 4", year: 2019 },
    { title: "Book 5", author: "Author 5", year: 2017 },
    { title: "Book 6", author: "Author 6", year: 2009 },
    { title: "Book 7", author: "Author 7", year: 2002 },
    { title: "Book 8", author: "Author 8", year: 2005 },
    { title: "Book 9", author: "Author 9", year: 2011 },
];

let filteredBooks = books.filter(book => book.year >= 2010).map(book => ({
    title: book.title,
    author: book.author.toUpperCase(),
    year: book.year, // add one to the original value of 'year'
}));

console.log(filteredBooks);
