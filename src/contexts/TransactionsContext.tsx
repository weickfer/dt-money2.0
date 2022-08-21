import { createContext, ReactNode, useEffect, useState } from "react";

type Transaction = {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  created_at: string;
}

type TransactionsContextData = {
  transactions: Array<Transaction>
}

export const TransactionsContext = createContext({} as TransactionsContextData)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}