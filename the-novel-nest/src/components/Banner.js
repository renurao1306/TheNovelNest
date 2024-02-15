const Banner = (props) => {
    return (
        <div style={{ position: 'fixed', top: '60px', width: '100%', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', zIndex: 1000 }}>
            <marquee>
                Get 50% off on all books till 26th January, 2024 !
            </marquee>
        </div>
    )
}

export default Banner;

