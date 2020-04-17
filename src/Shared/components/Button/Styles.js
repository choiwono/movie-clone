import styled, { css } from 'styled-components'
import { color } from '@/styles/share.style';

export const StyledButton = styled.button`
    border : none;
    border-radius : 7.25px;
    font-size : ${props => props.font || '1rem'};
    font-weight : normal;
    padding : 0.35rem 1rem;
    color: white;
    outline : none;
    cursor : pointer;
    box-shadow: ${props => props.shadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
    background : #2382DB;
    &:hover {
        background: #134E84;
    }

    &:disabled {
        opacity: 0.5;
        &:hover {
            cursor: not-allowed;
        }
    }
    
    ${props =>
        props.borderNone &&
        css`
            background: ${color.backgroundLightest};
            color: ${color.textMedium};
            box-shadow: none;
            &:hover {
                font-weight: 700;
                color: ${color.textWhite};
                background: ${color.backgroundDarkGrey};
            }
        `}

    ${props =>
        props.borderLine &&
        css`
            border: 1px solid ${color.primary};
            padding: 7.5px 15px;
            min-width: 50px; 
            background-color: transparent; 
            box-shadow: none;
            border-radius: 7.5px;
            color: ${color.textMedium} !important;
            font-size:0.85rem;
            &:hover {
                font-weight: 700;
                color: ${color.white} !important;
                background: ${color.primary};
                a {
                    color: ${color.textWhite};
                }
            }
            a {
                color: #1E1E1E;
            }
        `}

    ${props =>
        props.mr &&
        css`
            margin-right:${props.mr}px;
        `
    }

    ${props =>
        props.ml &&
        css`
            margin-left:${props.ml}px;
        `
    }

    ${props =>
        props.delete &&
        css`
            background:${color.danger};
            &:hover {
                background: rgba(219, 46, 35, 0.8);
            }
        `
    }
`;