import styled from "styled-components/native"

export const LoginContainer = styled.View`
    flex: 1;
    background-color: black;
    padding-top: 80px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
export const TitleEntrar = styled.Text`
    color: white;
    font-size: 50px;
    font-weight: bold;
`
export const Forms = styled.View`
    width: 100%;
    align-items: flex-start;
    margin-top: 80px;
    padding: 10px;
`
export const Email = styled.Text`
    color: white;
    font-size: 20px;
`
export const EmailInput = styled.TextInput`
    color: #FFFFFF;
    font-size: 20px;
    background-color: rgba(96, 96, 96, 0.50);
    height: 40px;
    padding: 5px 10px;
    align-self: stretch;
    border-radius: 20px;
`
export const Senha = styled.Text`
    color: white;
    font-size: 20px;
`
export const SenhaInput = styled.TextInput`
    color: #FFFFFF;
    font-size: 20px;
    background-color: rgba(96, 96, 96, 0.50);
    height: 40px;
    padding: 5px 10px;
    align-self: stretch;
    border-radius: 20px;
`
export const EntrarButton = styled.TouchableOpacity`
    padding: 5px 159px;
    height: 40px;
    width: 90%;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 2px solid rgba(1, 98, 227, 0.70);
`
