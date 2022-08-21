import * as Dialog from "@radix-ui/react-dialog";
import * as Radio from '@radix-ui/react-radio-group';
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(0, 0, 0, 0.5);
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    padding: 0 4.8rem;
    width: 53.5rem;
    height: 52.5rem;
    border-radius: 6px;

    background-color: ${({theme}) => theme['gray-600']};

    svg {
        align-self: flex-end;
        margin-top: 2.4rem;
    }

    form{
        display: flex;
        flex-direction: column;
        gap:1.6rem;
        margin-top: 3.2rem;

        input{
           height: 5.4rem;
           border:none;
           border-radius: 6px;
           padding: 1.6rem;

           background-color: ${({theme}) => theme['gray-700']};
           color:${({theme}) => theme.white};
        }

        button{
            font-size: 1.6rem;
            font-family: 'Roboto', sans-serif;
        }
    }
`

export const Title = styled(Dialog.Title)`
        font-weight: 700;
        font-size: 2.4rem;
`

export const RadioRoot = styled(Radio.Root)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1.6rem;
`
type RadioItemColorProps = {
    variant: 'income' | 'outcome'
}

export const RadioItem = styled(Radio.Item)<RadioItemColorProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:0.8rem;

    width:21.15rem;
    height:5.8rem;
    border:none;
    border-radius: 6px;

    background-color: ${({theme}) => theme['gray-500']};
    color: ${({theme}) => theme.white};

    cursor:pointer;

    svg {
        margin:0;
        align-self: center;

       color: ${props => props.variant === 'income' 
            ? props.theme['green-400']
            : props.theme['red-400']};
    }

    

    &[data-state="unchecked"]:hover{
        transition: background-color .3s;
        background-color: ${props => props.variant === 'income' 
            ? props.theme['green-400']
            : props.theme['red-400']};
            svg {
        color:${({theme}) => theme.white};
        }
    }

    &[data-state="checked"]{
        background-color: ${props => props.variant === 'income' 
            ? props.theme['green-400']
            : props.theme['red-400']};
            svg {
        color:${({theme}) => theme.white};
        }
    }
  
`
export const SetNewTransaction = styled.button`
            height: 6.6rem;
            border: none;
            border-radius: 6px;
            font-weight: 700;
            cursor: pointer;

            background-color: ${({theme}) => theme['green-500']};
            color: ${({theme}) => theme.white};

            &:hover{
                transition: background-color .3s;
                background-color: ${({theme}) => theme['green-400']};
            }
`