import React from "react";
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const menuList = [
    {path: '/', navTitle:'VC A'},
    {path: '/jewerly', navTitle:'jewerly'},
    {path: '/bridal', navTitle:'bridal'},
    {path: '/watch', navTitle:'watch'},
    {path: '/contact', navTitle:'contact'},
]

const NavList = () => {
  return (
    <ul className="nav_menu">
        {menuList.map((list, index)=>(
            <NavListItem key={index} path={list.path} navTitle={list.navTitle} />

        ))}

      {/* <NavListItem path="/" navTitle="VC A" />
      <NavListItem path="/jewerly" navTitle="jewelry" />
      <NavListItem path="/bridal" navTitle="bridal" />
      <NavListItem path="/watch" navTitle="watch" />
      <NavListItem path="/contact" navTitle="contact" /> */}

      <li>
        <a href="">
          <i class="nav_icon material-icons-outlined">search</i>
        </a>
      </li>
      <li>
        <a href="">
          <i class="nav_icon material-icons-outlined">account_circle</i>
        </a>
      </li>
    </ul>
  );
};

const NavListItem = ({ path, navTitle }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "main_bold" : "")}
      >
        {navTitle}
      </NavLink>
    </li>
  );
};

const Header = () => {
  return (
    <>
      <header>
        <nav class="container cf">
          <h2>
            <Link to="/" className="logo">
              Van Cleef & Arpel
            </Link>
          </h2>
          <NavList />
        </nav>
      </header>
    </>
  );
};

export default Header;
