import { SignUpContainer, BoxTop, BoxMid, BoxBottom, Button, Logo, SignUpTitle, NameText, NameInput, EmailText, EmailInput, PassText, PassInput, BoxInputName, BoxInputEmail, BoxInputPass, NameIcon, EmailIcon, PassIcon, ContainerButton, ButtonText } from "./style"
import { LinearGradient } from 'expo-linear-gradient';

export default function Cadastro() {
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
                <NameText>Nome Completo</NameText>
                <BoxInputName>
                    <NameInput
                        placeholder="Seu Nome"
                        keyboardType="default"
                    ></NameInput>
                    <NameIcon></NameIcon>
                </BoxInputName>
                <EmailText>Email</EmailText>
                <BoxInputEmail>
                    <EmailInput
                        placeholder="********"
                        keyboardType="default"
                    ></EmailInput>
                    <EmailIcon></EmailIcon>
                </BoxInputEmail>
                <PassText>Senha</PassText>
                <BoxInputPass>
                    <PassInput
                        placeholder="********"
                        keyboardType="default"

                    ></PassInput>
                    <PassIcon></PassIcon>
                </BoxInputPass>
            </BoxMid>

            <BoxBottom>
                <ContainerButton>
                    <Button>
                        <LinearGradient
                            colors={['rgba(30, 30, 30, 0.50)', 'rgba(1, 98, 227, 0.50)']}  // Definindo o gradiente
                            start={{ x: 0, y: 0 }}  // Ponto de início
                            end={{ x: 1, y: 0 }}    // Ponto final
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 250,
                                borderWidth: 2,
                                borderColor: 'rgba(1, 98, 227, 0.70)',  // Cor da borda
                                borderRadius: 40,
                            }}
                        >
                            <ButtonText>Cadastrar</ButtonText>
                        </LinearGradient>
                    </Button>
                </ContainerButton>
            </BoxBottom>

        </SignUpContainer>

    )

}