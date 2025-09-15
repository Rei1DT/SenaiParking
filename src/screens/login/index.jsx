import React from "react";
import { LoginContainer, TitleEntrar, Forms, Email, Senha, EmailInput, SenhaInput, EntrarButton } from "./style";

export default function Login() {
    return (
        <LoginContainer>
                <TitleEntrar>Entrar</TitleEntrar>
            <Forms>
                <Email>Email</Email>
                <EmailInput 
                placeholder="example@email.com" 
                keyboardType="email-address">
                </EmailInput>
                <Senha>Senha</Senha>
                <SenhaInput 
                placeholder="********" 
                keyboardType="default">
                </SenhaInput>
            </Forms>
            <EntrarButton></EntrarButton>
        </LoginContainer>
    )
}