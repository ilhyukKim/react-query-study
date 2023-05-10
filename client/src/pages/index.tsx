import styled from '@emotion/styled';
import CommonLayout from '@layouts/CommonLayout';
import Todo from '@parts/Todo/Todo';
import { parseJwt } from '@utils/jwt';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cookie from 'react-cookies';

function Index() {
    const [userEmailState, handleUserEmail] = useState('');
    const router = useRouter();

    const signout = () => {
        cookie.remove('token');
        router.reload();
    };

    useEffect(() => {
        const token = cookie.load('token');
        if (token) {
            const decoded = parseJwt(token + 'dwqweq');
            handleUserEmail(decoded);
            if (!decoded) {
                alert('로그인이 필요합니다.');
                router.push('/auth');
            }
        }
    }, []);

    return (
        <CommonLayout>
            <StyledContainer>
                <h1>Todo application with React query</h1>
                {userEmailState ? (
                    <div>
                        <p>{userEmailState}</p>
                        <button onClick={signout}>Sign out</button>
                    </div>
                ) : (
                    <div>
                        <Link href={'/auth'}>Sign in</Link>
                        <Link href={'/auth/SignUp'}>Sign up</Link>
                    </div>
                )}
                <Todo />
            </StyledContainer>
        </CommonLayout>
    );
}

export default Index;

const StyledContainer = styled.div`
    h1 {
        font-size: 4rem;
        color: #1ea7fd;
    }
    > div:first-of-type {
        padding: 2rem 0 0 0;
        a {
            display: inline-block;
            margin: 1rem;
            padding: 1rem 2rem;
            border-radius: 1rem;
            border: 1px solid #1ea7fd;
            &:hover {
                background-color: #1ea7fd;
                color: #fff;
            }
        }
    }
`;
