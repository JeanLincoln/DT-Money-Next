import * as S from './HomeStyles'
import { SeachForm } from "../components/SearchForm";
import { Summary } from "../components/Summary";

export default function Home(){
  return(
    <>
      <Summary />
      <SeachForm />
      <S.TransactionsTable>
        <tbody>
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
          </tbody>
      </S.TransactionsTable>
    </>
  )
}