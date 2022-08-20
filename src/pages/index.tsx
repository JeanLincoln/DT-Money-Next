import * as S from './HomeStyles'
import { SeachForm } from "../components/SearchForm";
import { Summary } from "../components/Summary";
import { Transaction } from "../components/Transaction";

export default function Home(){
  return(
    <>
      <Summary />
      <SeachForm />
      <S.TransactionsTable>
        <Transaction/>
      </S.TransactionsTable>
    </>
  )
}