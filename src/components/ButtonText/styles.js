import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};

    border: none;
    font-size: 16px;

    > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};

        margin-right: 8px;

        font-size: 14px;
       
    }
`