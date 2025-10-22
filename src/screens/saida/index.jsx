import { useState } from "react";
import {
    ExitContainer,
    BoxTop,
    BoxMid,
    BoxBottom,
    Button,
    Logo,
    ExitTitle,
    ContainerButton,
    ButtonText,
    GradientButton,
    BoxInput,
    LabelText,
    StyledInput,
} from "./style";

import { Truck } from "react-native-feather";
import { API_BASE_URL, getAxiosWithToken } from '../../api';
import axios from 'axios';

// 🔹 Componente reutilizável para inputs
function InputField({ label, placeholder, Icon, value, onChangeText, keyboardType }) {
    return (
        <>
            <LabelText>{label}</LabelText>
            <BoxInput>
                <StyledInput
                    placeholder={placeholder}
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChangeText}

                />
                <Icon
                    width={40}
                    height={30}
                    stroke="black" />
            </BoxInput>
        </>
    );
}

export default function Exit() {
    // 🔹 Estados dos inputs
    const [placa, setPlaca] = useState("");

    const handleExit = async () => {
        try {
            const axiosInstance = await getAxiosWithToken();
            await axiosInstance.put('/api/veiculos/saida', {
                placa
            });
            alert('Saída liberada com sucesso!');
        } catch (error) {
            alert('Erro ao registrar saída.');
        }
    };

    return (
        <ExitContainer>
            <BoxTop>
                <Logo
                    source={require("../../assets/images/logo.png")}
                    resizeMode="contain"
                ></Logo>
                <ExitTitle>Registrar Saída</ExitTitle>
            </BoxTop>

            <BoxMid>
                <InputField
                    label="Placa do Veículo"
                    placeholder="Digite sua placa"
                    Icon={Truck}
                    iconName="truck"
                    value={placa}
                    onChangeText={setPlaca}
                />
            </BoxMid>

            <BoxBottom>
                <ContainerButton>
                    <Button onPress={handleExit}>
                        <GradientButton>
                            <ButtonText>Registrar</ButtonText>
                        </GradientButton>
                    </Button>
                </ContainerButton>
            </BoxBottom>
        </ExitContainer>
    )
}