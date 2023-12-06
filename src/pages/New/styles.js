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

    .tags {
        display:flex;
        justify-content: left;
        gap: 24px;
    }
`;

export const Form = styled.form`
    max-width: 1700px;
    margin: 38px auto;
    padding: 0 80px;

  

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-family: Roboto Slab;
        

        margin: 24px 0 40px;
    }

    > div {
        display: flex;
        gap: 40px;
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .delete  {
        width: 100%;
        height: 56px;
        padding: 0 16px;
       
        justify-content: center;
        align-items: center;
        gap: 8px;
        
        border: 0;
        border-radius: 10px;
        font-weight: 500;


        &:disabled {
        opacity: 0.5;
    }

        background-color: #0D0C0F;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        
    }
`;