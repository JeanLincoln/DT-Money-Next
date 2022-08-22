import * as S from './styles'
import { SeachForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/Formatter';
import { Trash } from 'phosphor-react';

export default function Home(){
  const {transactions, deleteTransactions} = useContext(TransactionsContext)
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
                        <td align='center'>
                            <S.PriceHighLight variant={type}>
                              {type === 'outcome' && '- '}
                                {priceFormatter.format(value)}
                            </S.PriceHighLight>
                        </td>
                        <td 
                          align='center'>{category}
                        </td>
                        <td 
                          align='center'>
                          {dateFormatter.format(new Date(createdAt))}
                        </td>
                        <td 
                          align='right'>
                          <button 
                            onClick={async () => await deleteTransactions(id)}>
                              <Trash size={24}/>
                          </button>
                        </td>
            </S.TransactionRow>
            )
          })}
          </tbody>
      </S.TransactionsTable>
    </>
  )
}