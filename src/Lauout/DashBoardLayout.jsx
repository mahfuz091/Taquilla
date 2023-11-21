import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../Pages/DashBoard/Header/Header";
import Sidebar from "../Pages/DashBoard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <Container>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}></Header>
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        ></Sidebar>
        <Outlet></Outlet>
      </div>
    </Container>
  );
};

export default DashBoardLayout;
