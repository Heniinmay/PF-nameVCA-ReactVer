import React from "react";

const navList = () => {
  return (
    <ul className="nav_menu">
      <navListItem path="/" navTitle="VC A" />
      <navListItem path="/jewerly" navTitle="jewelry" />
      <navListItem path="/bridal" navTitle="bridal" />
      <navListItem path="/watch" navTitle="watch" />
      <navListItem path="/contact" navTitle="contact" />

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

const navListItem = ({ path, navTitle }) => {
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
            <a href="index.html" class="logo">
              Van Cleef & Arpel
            </a>
          </h2>
          <navList />
        </nav>
      </header>
    </>
  );
};

export default Header;
