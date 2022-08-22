import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../../axios'

type Transaction = {
    id: string,
    description: string,
    value: number,
    type: 'income' | 'outcome',
    category: string,
    createdAt: string,
}

type NewTransaction = {
    description: string,
    value: number,
    type: 'income' | 'outcome',
    category: string,
}

type TransactionsContextType = {
    transactions:Transaction[],
    createNewTransactions:(transaction:NewTransaction) => void
    fetchTransactions: (query?: string) => void
    deleteTransactions: (transactionToDelete:string) => void
}

type CyclesContextProviderProps = {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsContextProvider({children}:CyclesContextProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function createNewTransactions(transaction:NewTransaction){
        const {description, value, category, type} = transaction
        const response = await api.post('transactions',{
            description:description,
            value:value,
            category:category,
            type:type,
            createdAt:new Date(),
        })
        setTransactions( state => [response.data, ...state])
    }

    async function fetchTransactions(query?:string){
        const response = await api.get('transactions',{
            params:{
                _sort:'createdAt',
                _order: 'desc',
                q:query
            }
        })
        setTransactions(response.data)
    }

    async function deleteTransactions(transactionToDelete:string){
        const response = await api.delete(`transactions/${transactionToDelete}`)

        const transactionsLeft = 
            transactions.filter(transaction => 
                    transaction.id !== transactionToDelete)
        setTransactions(transactionsLeft)
    }

    useEffect(()=> {
        fetchTransactions()
    } ,[])

    const values = {
        transactions,
        createNewTransactions,
        fetchTransactions,
        deleteTransactions
    }

    return(
        <TransactionsContext.Provider value={values}>
            {children}
        </TransactionsContext.Provider>
    )
}