import React from 'react';

import { ErrorPage, ErrorBox, ErrorPageInner, Title } from './Styles'

const PageError = () => (
    <ErrorPage>
        <ErrorPageInner>
            <ErrorBox>
                <Title>에러 발생</Title>
                <p>
                    {'에러가 발생했습니다. '}
                    <a href="https://support.atlassian.com/jira-software-cloud/">Help Center</a>
                    {'의 문제해결이 필요하시면 위의 링크를 클릭해주세요.'}
                </p>
            </ErrorBox>
        </ErrorPageInner>
    </ErrorPage>
)

export default PageError;