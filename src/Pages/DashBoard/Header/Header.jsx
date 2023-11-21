import React from "react";
import logo from "../../../assets/images/logo.png";
import profile from "../../../assets/images/profile.png";
import plus from "../../../assets/images/plus.png";
import downarrow from "../../../assets/images/downarrow.png";

const Header = () => {
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
            <h4>Minhaj Uddin</h4>
            <img src={downarrow} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
