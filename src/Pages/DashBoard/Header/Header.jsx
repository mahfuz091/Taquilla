import React from "react";
import logo from "../../../assets/images/logo.png";
import profile from "../../../assets/images/profile.png";
import plus from "../../../assets/images/plus.png";
import downarrow from "../../../assets/images/downarrow.png";
import burgermenu from "../../../assets/images/burger-menu-svgrepo-com.svg";

const Header = ({ OpenSidebar }) => {
  return (
    <div className='header'>
      <img src={logo} alt='' />

      <div className='header-right'>
        <button className='create-event-btn'>
          <img src={plus} alt='' />
          Crear nuevo evento
        </button>
        <div className='header-right-profile'>
          <img src={profile} alt='' />
          <div className='header-right-profile-desc'>
            <h4>John Deo</h4>
            <img src={downarrow} alt='' />
          </div>
        </div>

        <button onClick={OpenSidebar} className='hambargur-btn'>
          <img src={burgermenu} alt='' />
        </button>
      </div>
    </div>
  );
};

export default Header;
