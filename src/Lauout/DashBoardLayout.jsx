
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Pages/DashBoard/Header/Header';

const DashBoardLayout = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };
    return (
        <Container>
            <div className="grid-container">
                <Header></Header>

            </div>
        </Container>
    );
};

export default DashBoardLayout;