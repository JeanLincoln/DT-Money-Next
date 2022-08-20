import styled from 'styled-components'

export const  HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    height: 21.2rem;
    padding: 4rem 16rem 0 16rem;

    background-color: ${({theme})=> theme['gray-700']};
    
    button{
        width: 15.2rem;
        height: 5rem;

        background-color: ${({theme})=> theme['green-500']};

        border:none;
        border-radius: 6px;
        font-size: 1.6rem;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            transition: background-color 0.3s;
            background-color: ${({theme})=> theme['green-400']};
        }
    }
`