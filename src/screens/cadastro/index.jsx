import { useState } from "react";
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

export default function Cadastro() {
    // 🔹 Estados dos inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        console.log("Dados do cadastro:", { name, email, password });
        // Aqui você pode chamar sua API ou serviço de autenticação
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