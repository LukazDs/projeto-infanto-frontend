import { Container } from '../components/container/styleContainer'
import { Button, Input, Label, Option } from '../components/form/styledForm'
import { Form } from '../components/form/styledForm'
import { Logo } from '../components/logo/Logo'
import { Password, SignIn } from "phosphor-react"

export function Login() {
    return (
        <Container>
            <Logo />
            <Form>
                <Option>
                    <SignIn size={22}/>
                    <Label>Email</Label>
                </Option>
                <Input />
                <Option>
                    <Password size={22}/>
                    <Label>Password</Label>
                </Option>
                <Input />
                <Button>Login</Button>
            </Form>
        
        </Container>
    )
}