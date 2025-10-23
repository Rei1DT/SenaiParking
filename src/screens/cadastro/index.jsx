import { useState } from "react";
import axios from 'axios';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    SignUpContainer,
    BoxTop,
    BoxMid,
    BoxBottom,
    Button,
    Logo,
    SignUpTitle,
    ContainerButton,
    ButtonText,
    GradientButton,
    BoxInput,
    LabelText,
    StyledInput,
} from "./style";

import { User, Mail, Eye } from "react-native-feather";
import { API_BASE_URL } from "../../api";

function InputField({ label, placeholder, Icon, ...props }) {
    return (
        <>
            <LabelText>{label}</LabelText>
            <BoxInput>
                <StyledInput
                    placeholder={placeholder}
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                    {...props}
                />
                <Icon
                    width={40}
                    height={30}
                    stroke="black" />
            </BoxInput>
        </>
    );
}

export default function Cadastro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSignUp = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/register`, {
                nome: name,
                email: email,
                senha: password
            });
            Alert.alert(
                'Sucesso',
                'Cadastro realizado com sucesso!',
                [
                    { text: 'OK', onPress: () => navigation.navigate('Login') }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.error('Erro no cadastro:', error?.response?.data || error.message || error);
            Alert.alert('Erro', 'Erro ao fazer cadastro. Verifique suas credenciais e tente novamente.');
        }
    };

    return (
        <SignUpContainer>
            <BoxTop>
                <Logo
                    source={require("../../assets/images/logo.png")}
                    resizeMode="contain"
                ></Logo>
                <SignUpTitle>Cadastro</SignUpTitle>
            </BoxTop>

            <BoxMid>
                <InputField
                    label="Nome Completo"
                    placeholder="Seu Nome"
                    Icon={User}
                    iconName="user"
                    value={name}
                    onChangeText={setName}
                />
                <InputField
                    label="Email"
                    placeholder="Digite seu e-mail"
                    Icon={Mail}
                    iconName="mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputField
                    label="Senha"
                    placeholder="Digite sua senha"
                    Icon={Eye}
                    iconName="lock"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </BoxMid>

            <BoxBottom>
                <ContainerButton>
                    <Button onPress={handleSignUp}>
                        <GradientButton>
                            <ButtonText>Cadastrar</ButtonText>
                        </GradientButton>
                    </Button>
                </ContainerButton>
            </BoxBottom>
        </SignUpContainer>
    )
}