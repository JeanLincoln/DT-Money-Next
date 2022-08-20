import styled from 'styled-components'

export const  HeaderContainer = styled.header`
    height: 21.2rem;
    padding-top: 4rem;

    background-color: ${({theme})=> theme['gray-700']};
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    button{
        width: 15.2rem;
        height: 5rem;

        background-color: ${({theme})=> theme['green-500']};
        color: ${({theme})=> theme.white};

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