import * as React from 'react';
import styled from 'styled-components'
import oc from 'open-color'

const SHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid ${oc.gray[4]};
    padding: 0 1rem;
`;

const HeaderMobile = () => {
    return (
        <SHeader />
    );
}

export default HeaderMobile;