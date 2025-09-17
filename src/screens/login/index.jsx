import { LoginContainer, TitleEntrar, Forms, Email, Senha, EmailInput, SenhaInput, EntrarButton, EntrarLabel } from "./style";


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
            <EntrarButton
                colors={['rgba(30, 30, 30, 0.50)', 'rgba(1, 98, 227, 0.50)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <EntrarLabel>Entrar</EntrarLabel>
            </EntrarButton>
        </LoginContainer>
    )
}