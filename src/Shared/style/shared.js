import styled, { css } from 'styled-components'
// Layout component

export const GridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const GridItem = styled.div`
    flex: 1;
`; 

export const color = {
    primary: '#2382DB',
    success: '#0B875B',
    danger: '#E13C3C',
    warning: '#F89C1C',
    secondary: '#F4F5F7',

    textDarkest: '#172b4d',
    textDark: '#42526E',
    textMedium: '#5E6C84',
    textLight: '#8993a4',
    textWhite: '#ffffff',
    textLink: '#0052cc',

    backgroundDarkHeader: '#2F2F37',
    backgroundDarkGrey: '#c2c4c7',
    backgroundDarkPrimary: '#0747A6',
    backgroundLightGrey: '#dfe1e6',
    backgroundLight: '#ebecf0',
    backgroundLightest: '#F4F5F7',
    backgroundLightPrimary: '#D2E5FE',
    backgroundLightSuccess: '#E4FCEF',

    borderLightest: '#dfe1e6',
    borderLight: '#C1C7D0',
    borderInputFocus: '#4c9aff',
};

export const font = {
    regular : 'font-weight: normal;',
    bold : 'font-weight: bolder;',
    size : size => `font-size: ${size}px`,
}

export const device = {
    Moblie : '320px',
    Tablet : '768px',
    TabletL : '992px',
    Laptop : '1200px',
    LaptopL : '1440px', 
}

export const zIndex = {
    modal : 1000,
}

export const mixin = {
    scrollableY: css`
        overflow-x: hidden;
        overflow-y: auto;
    `,
    
    backgroundImage: imageURL => css`
        background-image: url("${imageURL}");
        background-position: 50% 50%;
        background-repeat : no-repeat;
        background-size: over;
        background-color: ${color.backgroundLight};
    `
}

/*export default {
    GridWrapper,
    GridItem,
    color,
    font,
    device,
    zIndex,
    mixin,
};*/