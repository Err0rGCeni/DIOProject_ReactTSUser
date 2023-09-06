import { useState, useContext } from 'react'
import {
    Box, Center, Input
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { login } from '../services/login';
import Card from '../components/Card/Card';
import DButton from '../components/DButton/DButton';
import { AppContext } from '../components/AppContext/AppContext';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Credenciais inválidas!')
        }

        setIsLoggedIn(true)
        changeLocalStorage({login: true})
        navigate('/conta/1')
    }
    
    return (
        <Box padding={'25px'}>
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} type='password'/>
                <Center>
                    <DButton onClick={() => validateUser(email)} />
                </Center>
            </Card>
        </Box>
    )
}

export default Home
