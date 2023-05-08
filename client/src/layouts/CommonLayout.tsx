import styled from '@emotion/styled';

type CommonLayoutProps = {
    children: JSX.Element | JSX.Element[];
};

export default function CommonLayout({ children }: CommonLayoutProps) {
    return <StyledContainer>{children}</StyledContainer>;
}
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    padding: 5rem;
`;
