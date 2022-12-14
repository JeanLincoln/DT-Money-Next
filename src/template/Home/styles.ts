import styled from "styled-components";

export const TransactionsTable = styled.table`
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    width: 100%;
    max-width: 1120px;

    margin: 2.4rem  auto 0 auto;

    tbody{
        display: flex;
        flex-direction: column;
        gap:0.8rem;
    }
`

export const TransactionRow = styled.tr`
    display: flex;
    align-items: center;
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

        button{
            cursor: pointer;
            background-color:transparent;
            border:none;
            color:${({theme}) => theme['gray-300']};

            &:hover{
                transition: color 0.3s;
                color: ${({theme}) => theme['red-400']};
            }
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