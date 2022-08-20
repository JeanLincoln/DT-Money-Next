import styled from "styled-components";

export const SearchFormContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 6.4rem auto 0 auto ;

    form{
        display: flex;
        justify-content: space-between;
        gap:1.6rem;

        input{
            flex: 8;
            height:5.4rem;
            padding:1.6rem;
            font-size: 1.6rem;
            
            border-radius:8px;
            border: none;

            background-color: ${({theme})=>theme['gray-700']};
            color: ${({theme})=>theme.white};
        }

        button{
            flex: 1;

            display: flex;
            align-items: center;
            justify-content: center;

            gap:.8rem;
            border-radius:8px;

            border: 1px solid ${({theme})=>theme['green-500']};
            color: ${({theme})=>theme['green-500']};
            background-color: transparent;

            cursor:pointer;

            &:hover{
                transition: background-color 0.3s ease;
                color: ${({theme})=>theme.white};
                background-color: ${({theme})=>theme['green-400']};
            }

            svg{
                line-height: 0%;
            }
        }
    }
`