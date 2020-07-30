import React from 'react'
import { ThemeProvider, CSSReset, Button, Box, Flex } from '@chakra-ui/core'
import customTheme from 'theme'

function Index() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Box backgroundColor="#00AAAA">Text</Box>
      <Flex align="center" justify="center">
        <Button as="a">Click Bait</Button>
      </Flex>
    </ThemeProvider>
  )
}
export default Index
