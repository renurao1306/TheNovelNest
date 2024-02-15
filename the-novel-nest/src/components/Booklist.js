import books from '../data.json';
import Book from './Book';

const Booklist = () => {
    console.log(books, books.length);
    const data = books.books;
    console.log(data[1].title);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingTop: '30px' }}>
            {data.map((book, id) => (
                <Book image={book.image} title={book.title} author={book.author} isbn={book.isbn} pages={book.pages} price={book.price} key={id} />
            ))}
        </div>
    );
}

export default Booklist;