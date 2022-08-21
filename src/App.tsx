import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/globals";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <TransactionsProvider>
      <ThemeProvider theme={defaultTheme}>
        <Home />

        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  )
}
