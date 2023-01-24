import { Container } from '../components/container/styleContainer'
import { Button, Input, Label, Option } from '../components/form/styledForm'
import { Form } from '../components/form/styledForm'
import { Logo } from '../components/logo/Logo'
import { Password, SignIn } from "phosphor-react"
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <Container>
            <Logo />
            <Form>
                <Option>
                    <SignIn size={22}/>
                    <Label>Email</Label>
                    <Input />
                </Option>
                <Option>
                    <Password size={22}/>
                    <Label>Password</Label>
                    <Input />
                </Option>
                
                <Button>Login</Button>
                <Link to='/register'>Not registered? Register now.</Link>       
            </Form>
        </Container>
    )
}