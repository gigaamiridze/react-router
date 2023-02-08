import React  from 'react';
import { Link } from 'react-router-dom';
import { pages } from '../data/pages';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {pages.map(page => {
            const { id, name, path } = page;
            return (
              <li key={id}>
                <Link to={path}>{name}</Link>
              </li>  
            )
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
