import styled from "styled-components";

export const Form = styled.form`
    margin-top: 40px;
    width: 52%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5vh;
    box-sizing: border-box;
    background-color: #6995f4;
    border: solid 5px #1c3b7e;

    @media (max-width: 750px) {
        width: 88%;

        button {
            width: 28%;
        }
    }
`

export const Input = styled.input`
    color: #251919;
    background-color: white !important;
    width: 184px;
    height: 36px;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: medium;
    font-weight: 800;
    padding-left: 12px;
`

export const Button = styled.button`
    width: 18%;
    height: 12%;
    box-sizing: border-box;
    background-color: #00aeff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    font-size: large;
    font-weight: bold;
    margin: 28px 0px;
    color: white;
`

export const Label = styled.label`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: medium;
    margin-left: 8px;
    width: 86px;
`

export const Option = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 8px;
`