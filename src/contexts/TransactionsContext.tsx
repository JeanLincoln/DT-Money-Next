import { createContext, ReactNode, useState } from 'react'

type Transaction = {
    id: string,
    description: string,
    value: number,
    type: 'income' | 'outcome',
    category: string,
    createdAt: string,
}

type TransactionsContextType = {
    transactions:Transaction[]
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

    return(
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}