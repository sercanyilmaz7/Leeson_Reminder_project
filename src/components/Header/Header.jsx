import React from "react";
import HeaderStyle from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={HeaderStyle.nav}>
        <img
          className={HeaderStyle["image"]}
          src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-300x78.png"
          alt=""
        />
      </nav>
      <h1 className={HeaderStyle.title}>Lesson Reminder</h1>
    </div>
  );
};

export default Header;
