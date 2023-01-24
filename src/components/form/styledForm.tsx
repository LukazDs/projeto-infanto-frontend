import styled from "styled-components";

export const Form = styled.form`
    margin-top: 40px;
    width: 82%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5vh;
    box-sizing: border-box;
    border: 16px solid #2a4663;
`

export const Input = styled.input`
    color: #251919;
    background-color: white !important;
    width: 68%;
    height: 14%;
    margin: 14px 0;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: medium;
    font-weight: 800;
`

export const Button = styled.button`
    width: 72%;
    height: 12%;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;;
    font-size: large;
    font-weight: bold;
`

export const Label = styled.label`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: medium;
    margin-left: 8px;
`

export const Option = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
   
    width: 62%;
`