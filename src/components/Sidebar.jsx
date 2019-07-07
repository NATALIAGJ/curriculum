import React from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
    background-color: #78c6b3;
`;

const Sidebar = ({ children }) => (
    <SidebarStyle>
        <div className="sidebar-container">
            {children}
        </div>
    </SidebarStyle>
);


export default Sidebar;