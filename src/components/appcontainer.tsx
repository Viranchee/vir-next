import React, { FC } from 'react'
import { Link, Heading, Flex } from '@chakra-ui/core'

const AppContainer: FC<{}> = () => {
  return (
    <>
      <Header />
    </>
  )
}

export default AppContainer

const Header: FC<{}> = () => {
  return (
    <Flex as="header" justify="center">
      <Heading>Viranchee</Heading>
    </Flex>
  )
}
