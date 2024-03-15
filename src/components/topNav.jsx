const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand_logo" />
        </div>
        <div className="tabs">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            MENU
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            LOCATION
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            ABOUT
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            CONTACT
          </a>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
