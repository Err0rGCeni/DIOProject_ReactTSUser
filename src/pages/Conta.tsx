import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"

import { api } from "../api"
import CardInfo from "../components/CardInfo/CardInfo"
import { AppContext } from "../components/AppContext/AppContext"

interface IUserData {
  id: string
  email: string
  password: string
  name: string
  balance: number
}

const Conta = () => {
  const [userData, setUserData] = useState<null | IUserData>()
  const { id } = useParams()
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  useEffect(() => {
    console.log('useEffect!')
    const getData = async () => {
      const data: any | IUserData = await api
      setUserData(data)
    }

    getData()
  }, [])

  const actualDate = new Date()

  if(userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
      {
        userData === undefined || userData === null ? (
          <Spinner size={'xl'} color={'white'} marginTop={32} />
        ) : (
          <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            <CardInfo mainContent={`Bem Vindo ${userData?.name}`} content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()}`} />
            <CardInfo mainContent={'Saldo'} content={`R$ ${userData.balance}`} />
          </SimpleGrid>
        )
      }
    </Center>
  )
}

export default Conta
