import React from 'react';

const Book = ({ title, author, price, isbn, pages, image }) => {
    return (
        <div className='cont' style={{ border: "1px solid black", width: "300px" }}>
            <div id='image-container' style={{ height: '300px', width: '200px', margin: '20px', border: '1px solid black' }}>
                <img src={image} height='100%' width='100%' alt='an img' />
            </div>
            <div id='details-container' style={{ display: 'flex', flexDirection: 'column', margin: '10px', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <h3 style={{ textAlign: "center" }}>{title}</h3>
                <p>By {author}</p>
                <p>ISBN: {isbn}</p>
                <p>Pages: {pages}</p>
                <p>Price: ${price}</p>
            </div>
            <button style={{ width: '200px', height: '50px', borderRadius: '8px', backgroundColor: 'yellow', border: '1px solid black', margin: '20px', fontSize: '18px' }}>Add To Cart</button>
        </div>
    )
}

export default Book;