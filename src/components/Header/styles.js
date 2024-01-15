import styled from 'styled-components';

import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    gap: 64px;
    justify-content: right;
    align-items: center;

    padding: 0 80px;


    > div:first-child {
        color: ${({ theme }) => theme.COLORS.ORANGE};

        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

       
    }
   

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
   
    
    

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;

        
       
    }

    

    strong {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: right;
        white-space: nowrap;
        
    }
 
`;

export const Logout = styled.button`
    border: none;
    background: none;
    margin-top: -10px;
    display: flex;
    
    


    > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 24px;
    }

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        display: flex;
        flex-direction: column;
        text-align: right;
    }
`;



