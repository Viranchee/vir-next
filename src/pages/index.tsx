import React from 'react'
import { ThemeProvider, CSSReset, Button, Stack, Heading, Text } from '@chakra-ui/core'
import customTheme from 'theme'

function Index() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Stack spacing={4} p={8} borderRadius="lg" align="center" width="300px">
        <Heading as="h1" size="md" color="green1">
          Hello
        </Heading>
        <Text>Yo!</Text>
        <Button isFullWidth>Click Me Please</Button>
      </Stack>
    </ThemeProvider>
  )
}
export default Index
