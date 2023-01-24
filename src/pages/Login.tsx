import { Container } from '../components/container/styleContainer'
import { Button, Input, Label, Option } from '../components/form/styledForm'
import { Form } from '../components/form/styledForm'
import { Logo } from '../components/logo/Logo'
import { Password, SignIn } from "phosphor-react"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            <Logo />
            <Form>
                <Option>
                    <SignIn size={22}/>
                    <Label id='email'>Email</Label>
                    <Input 
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Option>
                <Option>
                    <Password size={22}/>
                    <Label id='password'>Password</Label>
                    <Input 
                        id='password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Option>
                
                <Button>Login</Button>
                <Link to='/register'>Not registered? Register now.</Link>       
            </Form>
        </Container>
    )
}