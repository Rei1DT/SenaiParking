import React, { useState } from 'react';
import Car from "../../assets/images/car-image.png"
import { Image } from 'react-native';
import {
    Container,
    Header,
    Title,
    VagasWrapper,
    Coluna,
    VagaContainer,
    VagaTexto,
    Button,
    ButtonText,
    GradientButton,
    Logo,
} from './style';

export default function Vagas() {
    const vagasEsquerda = ['A1', 'A2', 'A3', 'A4', 'A5'];
    const vagasDireita = ['A6', 'A7', 'A8', 'A9', 'A10'];
    const vagasVazias = ['A2', 'A9', 'A10', 'A6'];

    const [vagaSelecionada, setVagaSelecionada] = useState(null);

      const handleVagaSelect = (vaga) => {
    setVagaSelecionada(vaga); // Apenas registra a seleção da vaga
  };

  const handleContinuar = () => {
    if (vagasVazias.includes(vagaSelecionada)) {
      navigation.navigate('Entrada');  // Se for vaga vazia, vai para a tela Entrada
    } else {
      navigation.navigate('Saida');   // Se for vaga ocupada, vai para a tela Saída
    }
  };

    const renderVaga = (vaga) => {
        const isEmpty = vagasVazias.includes(vaga);

        return (
            <VagaContainer
                key={vaga}
                isSelected={vagaSelecionada === vaga}
                isEmpty={isEmpty}
                onPress={() => handleVagaSelect(vaga)}  // Ao clicar, registra a vaga
            >
                {isEmpty ? (
                    <VagaTexto>{vaga}</VagaTexto>
                ) : (
                    <Image source={Car} style={{ width: 60, height: 40 }} />
                )}
            </VagaContainer>
        );
    };

    return (
        <Container>
            <Header>
                <Logo
                    source={require("../../assets/images/logo.png")}
                    resizeMode="contain"
                />
            </Header>
            <Title>Selecione uma vaga:</Title>

            <VagasWrapper>
                <Coluna>{vagasEsquerda.map(renderVaga)}</Coluna>
                <Coluna>{vagasDireita.map(renderVaga)}</Coluna>
            </VagasWrapper>

            <Button onPress={handleContinuar}>
                <GradientButton>
                    <ButtonText>Continuar</ButtonText>
                </GradientButton>
            </Button>
        </Container>
    );
}