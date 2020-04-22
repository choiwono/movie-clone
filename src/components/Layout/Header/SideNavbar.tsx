import * as React from 'react';
import styled from 'styled-components'
import oc from 'open-color'

const SideNavBar = styled.header`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
`;

const CloseBtn = styled.span`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`;

const HeaderMobile = () => {
    return (
        <SideNavBar>
            <CloseBtn />
        </SideNavBar>
    );
}

export default HeaderMobile;