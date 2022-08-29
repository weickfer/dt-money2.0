import { MagnifyingGlass } from 'phosphor-react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchInputsSchema = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInputsSchema>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = handleSubmit(async (data) => {
    await fetchTransactions(data.query)
  })

  return (
    <SearchFormContainer onSubmit={handleSearchTransactions}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass weight="bold" size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
