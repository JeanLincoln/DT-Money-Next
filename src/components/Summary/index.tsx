import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import * as S from './styles'

export function Summary(){
    return(
        <S.SummaryContainer>
            <S.SummaryItem>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={26} color="#00B37E"/>
                </header>
                <strong >R$ 17.400,00</strong>
            </S.SummaryItem>
            <S.SummaryItem>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={26} color="#F75A68"/>
                </header>
                <strong >R$ 17.400,00</strong>
            </S.SummaryItem>
            <S.SummaryItem>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={26}/>
                </header>
                <strong >R$ 17.400,00</strong>
            </S.SummaryItem>
        </S.SummaryContainer>
    )
}