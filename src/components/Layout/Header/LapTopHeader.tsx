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

const LapTopHeader = () => {
    return (
        <React.Fragment>
            <SHeader>
                <h3>랩탑 헤더</h3>
            </SHeader>
        </React.Fragment>
    );
}

export default LapTopHeader;