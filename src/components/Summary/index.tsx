import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../Contexts/TransactionsContext'
import { priceFormatter } from '../../utils/Formatter'
import * as S from './styles'

export function Summary(){
    const { transactions } = useContext(TransactionsContext)
    const summary = transactions.reduce((acc,transaction)=>{
        if(transaction.type==='income'){
            acc.incomes += transaction.value
            acc.total += transaction.value
            return acc
        }
        acc.outcomes += transaction.value
        acc.total -= transaction.value
        return acc
    },
    {
        incomes:0,
        outcomes:0,
        total:0
    })
    return(
        <S.SummaryContainer>
            <S.SummaryItem>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={26} color="#00B37E"/>
                </header>
                <strong >{priceFormatter.format(summary.incomes)}</strong>
            </S.SummaryItem>
            <S.SummaryItem>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={26} color="#F75A68"/>
                </header>
                <strong >{priceFormatter.format(summary.outcomes)}</strong>
            </S.SummaryItem>
            <S.SummaryItem>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={26}/>
                </header>
                <strong >{priceFormatter.format(summary.total)}</strong>
            </S.SummaryItem>
        </S.SummaryContainer>
    )
}