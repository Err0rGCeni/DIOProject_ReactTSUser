import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ContaInfo = () => {
    return (
        <Box>
            <Text fontSize={'3xl'} fontWeight={'bold'}>
                Informações da conta
            </Text>
            <Link to={'/conta/1'}>
                Conta!
            </Link>
        </Box>
    )
}

export default ContaInfo
