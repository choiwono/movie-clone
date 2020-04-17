import React from 'react';
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import inboxOutlined from '@iconify/icons-ant-design/inbox-outlined';
import { ErrorBlock, ErrorIcon, Title, ErrorInnner } from './Styles'

interface Props {
    message : string,
}

const ContentsError: React.FC<Props> = props => (
    <ErrorBlock>
        <ErrorInnner>
            <Title>{props.message}</Title>
            <ErrorIcon>
                <Icon icon={inboxOutlined} />
            </ErrorIcon>
        </ErrorInnner>
    </ErrorBlock>
)

export default ContentsError;
