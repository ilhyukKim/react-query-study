import styled from '@emotion/styled';
import CommonLayout from '@layouts/CommonLayout';
import AuthFormContent from '@parts/Auth/AuthFormContent';
import axios from 'axios';
import { router } from 'next/client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

export default function SignUp() {
    const [emailState, handleEmail] = useState('');
    const [passwordState, handlePassword] = useState('');
    const queryClient = useQueryClient();
    const router = useRouter();

    const signupMutation = useMutation(
        (data) => {
            return axios.post('http://localhost:8080/users/create', data);
        },
        {
            onMutate: (variable: { email: String; password: string }) => {
                console.log('onMutate', variable);
            },
            onError: (error, variable, context) => {
                console.log(error);
            },
            onSuccess: (data, variables, context) => {
                console.log('success', data, variables, context);
                router.push('/');
            },
        },
    );

    const handleSignup = () => {
        signupMutation.mutate({ email: emailState, password: passwordState });
    };

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
                    handleButton={handleSignup}
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
