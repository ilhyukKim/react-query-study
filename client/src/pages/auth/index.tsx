import styled from '@emotion/styled';
import CommonLayout from '@layouts/CommonLayout';

export default function Auth() {
    return (
        <CommonLayout>
            <h1>Auth</h1>
            <input type={'email'} />
            <input type={'password'} />
            <button>Sign In</button>
        </CommonLayout>
    );
}
