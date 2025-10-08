function Header() {
  return (
    <header style={{ textAlign: 'left', marginTop: '5px' }}>
      <h1>Welcome to my Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <hr></hr>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
