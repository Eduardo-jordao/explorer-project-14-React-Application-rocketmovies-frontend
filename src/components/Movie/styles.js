import styled from "styled-components";

export const Container =  styled.button`
    
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: none;
    border-radius: 10px;

    padding: 22px;
    
    margin-bottom: 16px;

    overflow: hidden;
    

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};

        text-align:justify;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        
        

        

        margin-top: 15px;
        
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;

    }
`;