import styled from '@emotion/styled';
import CommonLayout from '@layouts/CommonLayout';
import AuthFormContent from '@parts/Auth/AuthFormContent';
import { useEffect, useState } from 'react';

export default function SignUp() {
    const [emailState, handleEmail] = useState('');
    const [passwordState, handlePassword] = useState('');

    const enrollAccount = () => {};

    return (
        <CommonLayout>
            <StyledContainer>
                <h1>Sign up</h1>
                <AuthFormContent
                    email={emailState}
                    password={passwordState}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    buttonLabel={'Sign up'}
                    handleButton={enrollAccount}
                />
            </StyledContainer>
        </CommonLayout>
    );
}

const StyledContainer = styled.div`
    margin: auto;
    > h1 {
        font-size: 4rem;
        color: cadetblue;
    }
`;
