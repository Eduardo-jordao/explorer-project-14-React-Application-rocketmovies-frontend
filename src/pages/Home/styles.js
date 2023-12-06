import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 40px 0;
        
    }

    

    > main::-webkit-scrollbar {
        width: 10px;
        height: 5px;
    }

    > main::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border: 1px solid #000;
    }
`;

export const Content = styled.div`
    grid-area: content;

    display: flex;
    justify-content: space-between;
    align-items: center;
    

    margin-bottom: 25px;

    > h1 {
        font-family: Roboto Slab;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    > button {
        width: 200px;
        height: 48px;
        
        align-items: center;
    }
`;


