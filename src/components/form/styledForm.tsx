import styled from "styled-components";

interface IPropForm {
    height:  string,
}

interface IPropOption {
    width:  string,
}


export const Form = styled.form`
    margin-top: 40px;
    width: 38%;
    height: ${(p: IPropForm) => p.height};
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
    width: 194px;
    height: 46px;
    box-sizing: border-box;
    border-radius: 10px;
    font-family: 'Open Sans', sans-serif;
    font-size: medium;
    font-weight: 800;
    padding-left: 12px;
    margin-left: 18px;
`

export const Button = styled.button`
    padding: 0 10px;
    height: 42px;
    box-sizing: border-box;
    background-color: #00aeff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    font-size: larger;
    font-weight: bold;
    margin: 28px 0px;
    color: white;
`

export const Label = styled.label`
    color: black;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: small;
    word-wrap: break-word;

`

export const Option = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(p: IPropOption) => p.width};
    margin-top: 8px;
    @media (max-width: 750px) {
        width: 86%;
    }
`