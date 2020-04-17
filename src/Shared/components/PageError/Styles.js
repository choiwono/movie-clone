import styled from 'styled-components';

import { color } from '@/Shared/style/shared'

export const ErrorPage = styled.div`
    padding: 0px;
`

export const ErrorPageInner = styled.div`
    margin : 0 auto;
    max-width : 1440px;
    padding: 100px 0;
    background: grey;
`;

export const ErrorBox = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 480px;
    padding: 32px;
    border-radius: 3px;
    border: 1px splid ${color.borderLight};
    box-shadow: 0 1px 0 rgba(0,0,0,0.25);
    background: rgba(255, 255, 255, 0.9);
`;

export const Title = styled.h1`
    margin-bottom: 16px;
    padding-left: 0px;
`;