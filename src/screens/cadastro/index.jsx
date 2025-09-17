import { CadastroContainer, BoxTop, BoxMid, BoxBottom, Bottom, Logo, CadastrarTitle, NomeLabel, NomeInput, EmailLabel, EmailInput, SenhaLabel, SenhaInput } from "./style"

export default function Cadastro() {
    return (
        <CadastroContainer>
            <BoxTop>
                <Logo source={require("../../assets/images/logo.png")}></Logo>
                <CadastrarTitle>Cadastrar</CadastrarTitle>
            </BoxTop>
            <BoxMid>
                <NomeLabel>Nome Completo</NomeLabel>
                <NomeInput></NomeInput>
                <EmailLabel>Email</EmailLabel>
                <EmailInput></EmailInput>
                <SenhaLabel>Senha</SenhaLabel>
                <SenhaInput></SenhaInput>
            </BoxMid>
            <BoxBottom>
                <Bottom>Bottom</Bottom>
            </BoxBottom>

        </CadastroContainer>

    )

}