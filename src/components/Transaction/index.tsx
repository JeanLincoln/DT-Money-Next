import * as S from './styles'

export function Transaction(){
    return(
        <>
        <S.TransactionRow>
                    <td>Desenvolvimento de site</td>
                    <td>
                        <S.PriceHighLight variant="income">
                            R$ 12.000.00
                        </S.PriceHighLight>
                    </td>
                    <td>Trabalho</td>
                    <td>13/04/2022</td>
        </S.TransactionRow>
        <S.TransactionRow>
                    <td>Hamburger</td>
                    <td>
                        <S.PriceHighLight variant="outcome">
                            -R$ 50.00
                        </S.PriceHighLight>
                    </td>
                    <td>Alimentação</td>
                    <td>13/04/2022</td>
        </S.TransactionRow>
        </>
    )
}