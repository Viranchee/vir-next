import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from 'theme'

function Index({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      {children}
    </ThemeProvider>
  )
}
export default Index
