import { useContext } from 'react'
import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { AppContext } from '../AppContext/AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor={'black'} padding={'5px'}>
      <Box >
        <Center>
          <Text fontSize={'3xl'} color={'white'}>DIO Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={logout}>
              Sair
            </Button>
          </>
        )
      }
    </Flex>
  )
}

export default Header
