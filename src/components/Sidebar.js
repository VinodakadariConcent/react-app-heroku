import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> */}
      <SidebarMenu>
        <SidebarLink to='/'>LIFESTYLE</SidebarLink>
        <SidebarLink to='/travel'>TRAVEL</SidebarLink>
        <SidebarLink to='/music'>MUSIC</SidebarLink>
        <SidebarLink to='/about'>ABOUT</SidebarLink>
        <SidebarLink to='/contact'>CONTACT</SidebarLink>
      </SidebarMenu>
      {/* <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
