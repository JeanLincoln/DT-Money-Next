import styled from "styled-components";

export const TransactionRow = styled.tr`
    display: flex;
    justify-content: space-between;
    padding: 2rem 3.2rem;
    border-radius: 6px;
    font-size: 1.6rem;

    background-color: ${({theme})=> theme['gray-500']};  
    td {
        flex:1;

        &:first-child {
            flex:3; 
        }
    }
`

type PriceHighLightProps = {
    variant:'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color:${(props) => props.variant === 'income'
        ?props.theme['green-400']
        :props.theme['red-400']};
`