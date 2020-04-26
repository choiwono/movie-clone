import * as React from 'react';
import styled from 'styled-components'
import oc from 'open-color'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react'; 
import menuIcon from '@iconify/icons-feather/menu';
import searchSharp from '@iconify/icons-ion/search-sharp';
import closeThick from '@iconify/icons-mdi/close-thick';
import { color, font } from '@/Shared/style/shared';
import { useState } from 'react';

const SHeader = styled.header`
    position: relative;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${color.backgroundDarkHeader};
    border-bottom: 1px solid ${oc.gray[4]};
    height: 56px;
    color: ${color.textWhite};
    svg {
        color: ${color.textWhite};
    }
`;

const SideNavBar = styled.div`
    height: 100%;
    padding-top: 56px;
    min-width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
`;

const SideMenu = styled.div`
    padding: 15px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 1.2rem;

    a {
        ${font.bold};
        color: ${color.textLight};
    }
`

const CloseBtn = styled.span`
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 36px;
    margin-top: 10px;
    margin-left: 50px;
    svg {
        color: ${color.textLight};
    }
`;

const HeaderActionWrappers = styled.div`
    box-sizing: border-box;
    outline: none;
    height: 56px;
`

const ActionButton = styled.button`
    padding: 14px 18px;
    border: 0;
    background-color: rgba(0,0,0,0);
`

const DrawerIcon = styled(Icon)`
    font-size: 30px;
`

const HeaderLogo = styled.h3`
    font-size: 1.35rem;
    margin: 0px;
`

const HeaderMobile = () => {
    const [ sideBar, setSidebar ] = useState(false);

    const showNavBar = () => {
        setSidebar(true);
    }

    const hideNavBar = () => {
        setSidebar(false);
    }

    return (
        <React.Fragment>
            <SHeader>
                <HeaderActionWrappers>
                    <ActionButton onClick={showNavBar}>
                        <DrawerIcon icon={menuIcon} />
                    </ActionButton>
                </HeaderActionWrappers>
                <HeaderLogo>My Movie</HeaderLogo>
                <HeaderActionWrappers>
                    <ActionButton>
                        <DrawerIcon icon={searchSharp} />
                    </ActionButton>
                </HeaderActionWrappers>
            </SHeader>
            { sideBar && 
                <SideNavBar>
                    <SideMenu>
                        <Link to="/">메뉴1</Link>
                    </SideMenu>
                    <SideMenu>
                        <Link to="/">메뉴2</Link>
                    </SideMenu>
                    <SideMenu>
                        <Link to="/">메뉴3</Link>
                    </SideMenu>
                    <CloseBtn onClick={hideNavBar}>
                        <DrawerIcon icon={closeThick} />
                    </CloseBtn>
                </SideNavBar>
            }
        </React.Fragment>
    );
}

export default HeaderMobile;