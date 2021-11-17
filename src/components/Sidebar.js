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
      {/* <div style={{backgroundImage:`url(${'https://amymhaddad.s3.amazonaws.com/morocco-blue.png'})`, width:'100%',height:'100%'}}> */}
      <SidebarMenu>
        <SidebarLink to='/'>LIFESTYLE</SidebarLink>
        <SidebarLink to='/travel'>TRAVEL</SidebarLink>
        <SidebarLink to='/music'>MUSIC</SidebarLink>
        <SidebarLink to='/about'>ABOUT</SidebarLink>
        <SidebarLink to='/contact'>CONTACT</SidebarLink>
      </SidebarMenu>
      {/* </div> */}
      {/* <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
