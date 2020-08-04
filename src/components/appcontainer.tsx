import React, { FC } from 'react'
import { Link, Heading, Flex } from '@chakra-ui/core'
import { Box, Image, Stack, Text } from '@chakra-ui/core/dist'

const AppContainer: FC<{}> = () => {
  return (
    <>
      <Header />
      <Stack isInline={true}>
        <Profile />
        <Posts />
      </Stack>
    </>
  )
}

export default AppContainer

const Header: FC<{}> = () => {
  return (
    <Flex as="header" justify="center" mt={4} >
      <Heading as="button">Viranchee</Heading>
    </Flex>
  )
}

const Profile: FC<{}> = () => {
  return <Text p={4} >Hello</Text>
}
const Posts: FC<{}> = () => {
  return (
    <Box size="lg">
      <Image alt="Some Nice Background" src="https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-18.jpg" />
    </Box>
  )
}