import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type AuthFormContentProps = {
    email: string;
    password: string;
    handleEmail: (email: string) => void;
    handlePassword: (password: string) => void;
    buttonLabel: string;
    handleButton: () => void;
};
export default function AuthFormContent(props: AuthFormContentProps) {
    const {
        email,
        password,
        handleEmail,
        handlePassword,
        buttonLabel,
        handleButton,
    } = props;

    const [isEmailValid, handleEmailValidation] = useState(false);
    const [isPasswordValid, handlePasswordValidation] = useState(false);

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const validEmail = () => {
        handleEmailValidation(emailRegex.test(email));
    };
    const validPassword = () => {
        handlePasswordValidation(password.length >= 8);
    };

    useEffect(() => {
        validEmail();
    }, [email]);

    useEffect(() => {
        validPassword();
    }, [password]);

    return (
        <StyledAuthFormContainer validity={isEmailValid && isPasswordValid}>
            <div>
                <label>Email : </label>
                <input
                    type={'email'}
                    value={email}
                    onChange={(e) => handleEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password : </label>
                <input
                    type={'password'}
                    value={password}
                    onChange={(e) => handlePassword(e.target.value)}
                />
            </div>
            <div>
                <button
                    onClick={handleButton}
                    disabled={!(isEmailValid && isPasswordValid)}
                >
                    {buttonLabel}
                </button>
            </div>
        </StyledAuthFormContainer>
    );
}

const StyledAuthFormContainer = styled.div<{ validity: boolean }>`
    > h1 {
        font-size: 4rem;
        color: cadetblue;
    }
    > div {
        margin: 2rem 0 0 0;
        label {
            display: inline-block;
            width: 10rem;
        }
        input {
            width: 20rem;
            height: 3rem;
            background-color: aliceblue;
            border: 0;
            border-bottom: 1px solid #1ea7fd;
            color: #1ea7fd;
            font-weight: 700;
            padding: 0 1rem;
        }
        &:first-of-type {
            margin: 5rem 0 0 0;
        }
        &:last-of-type {
            float: right;
            button {
                padding: 1rem 2rem;
                border: 2px solid
                    ${(props) => (props.validity ? '#1ea7fd' : '#d4d4d4')};
                border-radius: 1rem;
                color: ${(props) => (props.validity ? '#1ea7fd' : '#d4d4d4')};
                font-weight: 700;
                &:hover {
                    background-color: ${(props) =>
                        props.validity ? 'aliceblue' : '#f4f4f4'};
                }
            }
        }
    }
`;
