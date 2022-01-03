import React from "react";

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
          <ul class="nav_menu">
            <li>
              <a href="" class="main_bold">
                VC A
              </a>
            </li>
            <li>
              <a href="">jewelry</a>
            </li>
            <li>
              <a href="">BRADAL</a>
            </li>
            <li>
              <a href="">WATCH</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
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
        </nav>
      </header>
    </>
  );
};

export default Header;
