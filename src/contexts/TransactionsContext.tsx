import { createContext, ReactNode, useState } from 'react'

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
}

type CyclesContextProviderProps = {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsContextProvider({children}:CyclesContextProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>(
        [
            {
                id:'1',
                description: 'Desenvolvimento de site',
                value: 12000,
                type: 'income',
                category: 'Trabalho',
                createdAt: "2022-07-29T19:30:44.505Z",
                
            },
            {
                id:'2',
                description: 'Hamburguer',
                value: 50,
                type: 'outcome',
                category: 'Alimentação',
                createdAt: "2022-07-29T19:36:44.505Z",
                
            }
        ]
        )

    function createNewTransactions(transaction:NewTransaction){
        const {description, value, category, type} = transaction
        const newTransaction = {
            id:String(new Date()),
            description:description,
            value:value,
            category:category,
            type:type,
            createdAt:String(new Date()),
        }
        setTransactions( state => [newTransaction, ...state])
    }

    return(
        <TransactionsContext.Provider value={{transactions,createNewTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}