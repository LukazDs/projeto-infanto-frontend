import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/container/styleContainer";
import { Button, Form, Input, Label, Option } from "../components/form/styledForm";
import { Logo } from "../components/logo/Logo";
import Loading from "../loaders/Loading";

export function UserRegister() {
    const [clicked, setClicked] = useState(false)

    return (
        <Container>
            <Logo size={110}/>
            <Form height={'70vh'}>
                <Option width={'58%'}>
                    <Label>Nome</Label>
                    <Input />
                </Option>
                <Option width={'58%'}>
                    <Label>ImageUrl</Label>
                    <Input />
                </Option>
                <Option width={'58%'}>
                    <Label>Email</Label>
                    <Input />
                </Option>
                <Option width={'58%'}>
                    <Label>Password</Label>
                    <Input />
                </Option>
                <Option width={'58%'}>
                    <Label>Confirm Password</Label>
                    <Input />
                </Option>
                <Button>
                    {clicked ? <Loading/> : "Register"}
                </Button>
                <Link to='/'>Are you already registered? Then perform the login.</Link>   
            </Form>
        </Container>
    )
}