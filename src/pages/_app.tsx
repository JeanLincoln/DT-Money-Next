import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from "../../node_modules/next/app"
import { Header } from '../components/Header'
import { TransactionsContextProvider } from '../contexts/TransactionsContext'
import { GlobalStyle } from '../styles/Global'
import { DefaultTheme } from '../styles/themes/Default'

function MyApp({ Component, pageProps }:AppProps) {
  return (
 
    <ThemeProvider theme={DefaultTheme}>
      <TransactionsContextProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </TransactionsContextProvider>
    </ThemeProvider>
    
    )
}

export default MyApp