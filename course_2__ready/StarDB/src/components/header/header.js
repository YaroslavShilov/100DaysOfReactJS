import React from 'react';

import './header.css';

const Header = () => {
	const onClick = e => e.preventDefault();
  return (
    <div className="header d-flex">
      <h3>
        <a href="/">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/" onClick={onClick}>People</a>
        </li>
        <li>
          <a href="/" onClick={onClick}>Planets</a>
        </li>
        <li>
          <a href="/" onClick={onClick}>Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;