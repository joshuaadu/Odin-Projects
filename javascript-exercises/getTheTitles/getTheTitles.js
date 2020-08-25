const getTheTitles = function (books) {
    const bookTitles = books.reduce((list, book) => {
        list.push(book.title);
        return list;
    }, [])
    return bookTitles;
}

module.exports = getTheTitles;