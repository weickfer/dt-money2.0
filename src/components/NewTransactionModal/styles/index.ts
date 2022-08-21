import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0 , 0.75);
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  font-size: 0;
  color: ${props => props.theme["gray-500"]};
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${props => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;
      background: ${props => props.theme["gray-900"]};
      color: ${props => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${props => props.theme['gray-500']}
      }
    }

    button[type="submit"] {
      border: 0;
      border-radius: 6px;
      height: 50px;
      background: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      font-weight: bold;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      cursor: pointer;

      &:hover {
        background: ${props => props.theme["green-500"]};
        transition: 0.2s;
      }
    }
  }
`

export * from './TransactionType.styles'