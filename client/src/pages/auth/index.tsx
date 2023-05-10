import styled from '@emotion/styled';
import CommonLayout from '@layouts/CommonLayout';
import AuthFormContent from '@parts/Auth/AuthFormContent';
import { parseJwt } from '@utils/jwt';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import cookie from 'react-cookies';

export default function Auth() {
    const [emailState, handleEmail] = useState('');
    const [passwordState, handlePassword] = useState('');
    const router = useRouter();

    const signinMutation = useMutation(
        (data) => {
            return axios.post('http://localhost:8080/users/login', data);
        },
        {
            onMutate: (variable: { email: String; password: string }) => {
                console.log('onMutate', variable);
            },
            onError: (error, variable, context) => {
                console.log(error);
            },
            onSuccess: (data, variables, context) => {
                cookie.save('token', data.data.token, {
                    path: '/',
                    httpOnly: false,
                });
                router.push('/');
            },
        },
    );
    const handleSignin = () => {
        signinMutation.mutate({ email: emailState, password: passwordState });
    };

    useEffect(() => {
        const token = cookie.load('token');
        if (token) {
            const decoded = parseJwt(token + 'dwqweq');
            if (!!decoded) {
                router.push('/');
            }
        }
    }, []);

    return (
        <CommonLayout>
            <StyledContainer>
                <h1>Sign in</h1>
                <AuthFormContent
                    email={emailState}
                    password={passwordState}
                    handleEmail={handleEmail}
                    handlePassword={handlePassword}
                    buttonLabel={'Sign in'}
                    handleButton={handleSignin}
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
