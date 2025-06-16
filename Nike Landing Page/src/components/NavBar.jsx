let NavBar = () => {
    return (
        <nav className="container">
            <div className="logo">
                <img src="./public/images/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>
                Login
            </button>
        </nav>
    )
}

export default NavBar;