import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
      } else {
        acc.outcome += transaction.price
      }

      return acc
    },
    { income: 0, outcome: 0 },
  )
  const total = summary.income - summary.outcome

  return { ...summary, total }
}
