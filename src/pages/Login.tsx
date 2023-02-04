import { Container } from '../components/container/styleContainer'
import { Button, Input, Option } from '../components/form/styledForm'
import { Form } from '../components/form/styledForm'
import { Logo } from '../components/logo/Logo'
import { Password, SignIn } from "phosphor-react"
import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import Loading from '../loaders/Loading'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [clicked, setClicked] = useState(false)

    function loginUser(event: FormEvent) {
        event.preventDefault()

        setClicked(!clicked)
    }

    return (
        <Container>
            <Logo size={140}/>
            <Form onSubmit={loginUser} height={'50vh'}>
                <Option width={'48%'}>
                    <SignIn size={32} color={'white'} weight={'fill'}/>
                    
                    <Input 
                        id='email' 
                        value={email}
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email' 
                    />
                </Option>
                <Option width={'48%'}>
                    <Password size={32} color={'white'} weight={'fill'}/>
                    <Input 
                        id='password' 
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        placeholder='Password'
                    />
                </Option>
                <Button>
                    {clicked ? <Loading/> : "Login"}
                </Button>
                <Link to='/register'>Not registered? Register now.</Link>       
            </Form>
        </Container>
    )
}