import { useState } from "react";
import {
    LoginContainer,
    BoxTop,
    BoxMid,
    BoxBottom,
    Button,
    Logo,
    LoginTitle,
    ContainerButton,
    ButtonText,
    GradientButton,
    BoxInput,
    LabelText,
    StyledInput,
    RegisterLink,
    RegisterText,
} from "./style";

import { Mail, Eye } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import Cadastro from "../cadastro";

// 🔹 Componente reutilizável para inputs
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

export default function Login() {
    const navigation = useNavigation()
    
    // 🔹 Estados dos inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleLogin = () => {
    //     console.log("Dados do login:", { email, password });
    //     // Aqui você pode chamar sua API ou serviço de autenticação
    // };

    return (
        <LoginContainer>
            <BoxTop>
                <Logo
                    source={require("../../assets/images/logo.png")}
                    resizeMode="contain"
                ></Logo>
                <LoginTitle>Login</LoginTitle>
            </BoxTop>

            <BoxMid>
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
                    <Button onPress={() => navigation.navigate('Vagas')}>
                        <GradientButton>
                            <ButtonText>Entrar</ButtonText>
                        </GradientButton>
                    </Button>
                </ContainerButton>

                <RegisterLink onPress={() => navigation.navigate('SignUp')}>
                    <RegisterText>Não tem uma conta? Cadastre-se</RegisterText>
                </RegisterLink>
            </BoxBottom>

        </LoginContainer>
    )
}