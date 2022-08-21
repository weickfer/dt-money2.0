import styled, { css, DefaultTheme } from "styled-components"
import * as RadioGroup from '@radix-ui/react-radio-group'

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`

type TransactionButtonVariant = 'income' | 'outcome'

interface TransactionTypeButtonProps {
  variant: TransactionButtonVariant
}

const transactionButtonVariants = (theme: DefaultTheme) => ({
  income: {
    iconColor: theme['green-300'],
    background: theme['green-500']
  },
  outcome: {
    iconColor: theme['red-300'],
    background: theme['red-500']
  }
})

const customCssButtonByVariant = (theme: DefaultTheme, variant: TransactionButtonVariant) => {
  const buttonTheme = transactionButtonVariants(theme)[variant]

  return css`
    svg {
      color: ${buttonTheme.iconColor};
    }

    &[data-state="unchecked"]:hover {
      background: ${theme["gray-600"]};
    }

    &[data-state="checked"] {
      background: ${buttonTheme.background};

      svg {
        color: ${theme.white};
      }
    }
  `
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${props => props.theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  color: ${props => props.theme["gray-300"]};

  ${props => customCssButtonByVariant(props.theme, props.variant)}
`
