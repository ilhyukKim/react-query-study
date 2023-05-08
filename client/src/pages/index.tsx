import styled from '@emotion/styled';
import Todo from '@parts/Todo/Todo';
import Link from 'next/link';
import CommonLayout from '@layouts/CommonLayout';

function Index() {
    return (
        <CommonLayout>
            <StyledContainer>
                <h1>Todo application with React query</h1>
                <div>
                    <Link href={'/auth'}>Sign in</Link>
                    <Link href={'/auth/SignUp'}>Sign up</Link>
                </div>
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
