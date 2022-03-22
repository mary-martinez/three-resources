import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/toys">
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/directors">
            Directors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
