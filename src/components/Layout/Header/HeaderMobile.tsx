import * as React from 'react';
import styled from 'styled-components'
import oc from 'open-color'

const SHeader = styled.header`
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid ${oc.gray[4]};
    height:48px;
`;

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

const DrawerButton = styled.button`
    padding: 12px 16px;
    border: 0;
    background-color: rgba(0,0,0,0);
`

const HeaderMobile = () => {
    return (
        <React.Fragment>
            <SHeader>
                <DrawerButton>

                </DrawerButton>
            </SHeader>
            <SideNavBar>
                <CloseBtn/>
            </SideNavBar>
        </React.Fragment>
    );
}

export default HeaderMobile;