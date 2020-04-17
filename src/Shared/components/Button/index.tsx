import * as React from 'react'
import { StyledButton } from './Styles'

interface Props {
    //message?: string,
}

const Button: React.FC<Props> = props => {
    //const { message } = props;

    return (
        <StyledButton {...props} />
    )
}

export default Button;
