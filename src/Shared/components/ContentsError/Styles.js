import styled from 'styled-components'
import { color } from '@/Shared/style/shared'

export const ErrorBlock = styled.div`
    width: 100%;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ErrorInnner = styled.div`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`

export const ErrorIcon = styled.span`
    font-size: 50px;
    color: ${color.textLight};
`

export const Title = styled.h4`
    color: ${color.textLight}
`