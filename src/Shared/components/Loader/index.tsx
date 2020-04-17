import * as React from 'react'
import { LoaderStyle } from './Styles'

interface Props {

}

const Loader: React.FC<Props> = props => {
    return (
        <LoaderStyle>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderStyle>
    );
}

export default Loader;