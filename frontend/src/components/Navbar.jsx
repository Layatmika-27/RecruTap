function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">RecruTap</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/analyze">Analyze</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;