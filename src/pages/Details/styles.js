import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header" 
    "content";

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
    max-width: 1000px;
    
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: self-start;
        margin-bottom: -35px;
    }
`;
export const Info = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    gap: 8px;
    justify-content: left;

    margin-bottom: 40px;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};

    }
`;
