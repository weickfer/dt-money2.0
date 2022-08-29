import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  created_at: string
}

type CreateTransaction = Omit<Transaction, 'created_at' | 'id'>

type TransactionsContextData = {
  transactions: Array<Transaction>
  fetchTransactions(query?: string): Promise<void>
  createTransaction(transaction: CreateTransaction): Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async ({
    category,
    description,
    price,
    type,
  }: CreateTransaction) => {
    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      created_at: new Date(),
    })

    setTransactions((oldTransactions) => [response.data, ...oldTransactions])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
