import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import theme from '../theme'
import React from 'react'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

function App({ Component, pageProps }: AppPropsType) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
