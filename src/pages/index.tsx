import React, { FC } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from 'theme'
import AppContainer from 'components/appcontainer'

const Index: FC<{}> = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <AppContainer />
    </ThemeProvider>
  )
}
export default Index
