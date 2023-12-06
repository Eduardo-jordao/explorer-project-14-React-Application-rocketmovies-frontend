import styled from "styled-components";

export const Container = styled.section`
    margin: 56px 0 28px;

    > h1 {
        

        padding-bottom: 16px;
        margin-bottom: 24px;
        

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
        font-weight: 400;

        font-family: Roboto Slab;
    }

    > h2 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align:justify;

        font-family: Roboto Slab;

        margin-top: 40px;
    }

`;