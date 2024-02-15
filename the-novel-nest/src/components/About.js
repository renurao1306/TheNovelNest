const About = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', background: 'linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)', minHeight: '100vh'}}>
            <h1 style={{ textAlign: 'center' }}>About Us!</h1>
            <div className="about-us-container" style={{width: '900px'}}>
            <p style={{ textAlign: 'center' }}>Welcome to The Novel Nest, your ultimate destination for all things literary. Established with a passion for books and a commitment to fostering a love for reading, The Novel Nest is more than just a bookstore – it's a haven for book enthusiasts, a hub for literary exploration, and a community of avid readers.</p>
            <p style={{textAlign: 'center'}}>Whether you're seeking an escape into a captivating story, looking to expand your knowledge through insightful non-fiction, or simply in search of inspiration, we have something for every reader. Our carefully curated collection spans a wide range of genres, from timeless classics to contemporary bestsellers, ensuring that there's a book to captivate every imagination.</p>
            <p style={{textAlign: 'center'}}>But we're more than just a bookstore. We're a community of book enthusiasts, united by our love for stories and knowledge. Our team of dedicated bookworms is committed to helping you discover new authors, explore different genres, and find the perfect book to ignite your imagination.

At The Novel Nest, we believe in the power of storytelling to inspire, educate, and entertain. We're here to fuel your passion for reading and accompany you on your literary adventures. Join us on this journey as we celebrate the magic of books and the joy of reading.</p>

<p style={{textAlign: 'center'}}>Thank you for choosing The Novel Nest. Happy reading!</p>
            </div>
        </div>
    );
}

export default About;