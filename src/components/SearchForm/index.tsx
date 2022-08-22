import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import * as z from 'zod'
import * as S from './styles'

const SearchTransactionSchema = z.object({
    searchDescription: z.string()
})

type SearchTransactionFormInputs = z.infer<typeof SearchTransactionSchema>

export function SeachForm(){
    const { fetchTransactions } = useContext(TransactionsContext)
    const { register, handleSubmit, reset } = useForm<SearchTransactionFormInputs>({
        resolver: zodResolver(SearchTransactionSchema)
    })

    async function handleSearchTransactions(data:SearchTransactionFormInputs){
        fetchTransactions(data.searchDescription)
        reset()
    }

    return(
        <S.SearchFormContainer>
            <form onSubmit={handleSubmit(handleSearchTransactions)}>
                <input {...register('searchDescription')} type="text" placeholder='Busque uma transação'/>
                <button type='submit'>
                    <MagnifyingGlass size={20} />
                    <strong>Buscar</strong>
                </button>
            </form>
        </S.SearchFormContainer>
    )
}