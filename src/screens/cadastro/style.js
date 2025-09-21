import styled from "styled-components/native";
import { User, Mail, Eye } from "react-native-feather";
import { Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export const SignUpContainer = styled.View`
    flex: 1;
    background-color: black;
    align-items: center;
    justify-content: center;
`
export const BoxTop = styled.View`
    height: ${height / 4};
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const BoxMid = styled.View`
    height: ${height / 3};
    width: 100%;
    padding-inline: 30px;
`
export const BoxBottom = styled.View`
    height: ${height / 3};
    width: 100%;
    align-items: center;
`

export const BoxInputName = styled.View`
    width: 100%;
    height: 40px;
    border-width: 2;
    margin-top: 10px;
    flex-direction: row;
    border-radius: 20px;
    align-items: center;
    padding-inline: 5px;
    background-color: #606060;
    border-color: #606060;
`
export const BoxInputEmail = styled.View`
    width: 100%;
    height: 40px;
    border-width: 2;
    margin-top: 10px;
    flex-direction: row;
    border-radius: 20px;
    align-items: center;
    padding-inline: 5px;
    background-color: #606060;
    border-color: #606060;
`
export const BoxInputPass = styled.View`
    width: 100%;
    height: 40px;
    border-width: 2;
    margin-top: 10px;
    flex-direction: row;
    border-radius: 20px;
    align-items: center;
    padding-inline: 5px;
    background-color: #606060;
    border-color: #606060;
`

export const Logo = styled.Image`

`

export const SignUpTitle = styled.Text`
    font-weight: bold;
    margin-top: 10px;
    color: #ffff;
    font-size: 40px;
`

export const NameText = styled.Text`
    margin-top: 10px;
    margin-left: 5px;
    color: #ffff;
`
export const EmailText = styled.Text`
    margin-top: 10px;
    margin-left: 5px;
    color: #ffff;
`
export const PassText = styled.Text`
    margin-top: 10px;
    margin-left: 5px;
    color: #ffff;
`

export const NameInput = styled.TextInput`
    width: 90%;
    height: 100%;
    border-radius: 20px;  
    padding-left: 5px;
`
export const EmailInput = styled.TextInput`
    width: 90%;
    height: 100%;
    border-radius: 20px;
    padding-left: 5px;
`
export const PassInput = styled.TextInput`
    width: 90%;
    height: 100%;
    border-radius: 20px;
    padding-left: 5px;
`

export const NameIcon = styled(User)`
    size: 40px;
    color: black;
`
export const EmailIcon = styled(Mail)`
    size: 40px;
    color: black;
`
export const PassIcon = styled(Eye)`
    size: 40px;
    color: black;
`

export const ContainerButton = styled.View`
    align-items: center;
    justify-content: center;
    
`

export const Button = styled.TouchableOpacity`
    height: 50px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
export const ButtonText = styled.Text`
    font-weight: bold;
    color: #ffff;
    
`