import * as S from './styles'
import { SeachForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { useContext } from 'react';
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/Formatter';

export default function Home(){
  const {transactions} = useContext(TransactionsContext)

  return(
    <>
      <Summary />
      <SeachForm />
      <S.TransactionsTable>
        <tbody>
          {transactions.map(({id,description,value,type,category,createdAt} )=>{
            return(
              <S.TransactionRow key={id}>
                        <td>{description}</td>
                        <td>
                            <S.PriceHighLight variant={type}>
                                {priceFormatter.format(value)}
                            </S.PriceHighLight>
                        </td>
                        <td>{category}</td>
                        <td>{dateFormatter.format(new Date(createdAt))}</td>
            </S.TransactionRow>
            )
          })}
          
          </tbody>
      </S.TransactionsTable>
    </>
  )
}