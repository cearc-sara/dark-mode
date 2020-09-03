import React from 'react';





const Navbar = (props) => {
  const {darkMode, toggleMode} = props;


  // const toggleMode = e => {
  //   e.preventDefault();
  //   setValue(!value);
  // };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
