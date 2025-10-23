import { useState } from "react";
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    EntranceContainer,
    BoxTop,
    BoxMid,
    BoxBottom,
    Button,
    Logo,
    EntranceTitle,
    ContainerButton,
    ButtonText,
    GradientButton,
    BoxInput,
    LabelText,
    StyledInput,
} from "./style";

import { Truck } from "react-native-feather";
import { API_BASE_URL, getAxiosWithToken } from '../../api';

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

export default function Entrance() {
    // 🔹 Estados dos inputs
    const [placa, setPlaca] = useState("");
    const navigation = useNavigation();

    const handleEntrance = async () => {
        try {
            const axiosInstance = await getAxiosWithToken();
            await axiosInstance.post('/api/veiculos/entrada', {
                placa
            });
                        Alert.alert('Sucesso', 'Entrada liberada com sucesso!', [
                            { text: 'OK', onPress: () => navigation.navigate('ListaDeVagas') }
                        ], { cancelable: false });
        } catch (error) {
                        console.error('Erro ao registrar entrada:', error?.response?.data || error.message || error);
                        Alert.alert('Erro', 'Erro ao registrar entrada. Tente novamente.');
        }
    };

    return (
        <EntranceContainer>
            <BoxTop>
                <Logo
                    source={require("../../assets/images/logo.png")}
                    resizeMode="contain"
                ></Logo>
                <EntranceTitle>Registrar Entrada</EntranceTitle>
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
                    <Button onPress={handleEntrance}>
                        <GradientButton>
                            <ButtonText>Registrar</ButtonText>
                        </GradientButton>
                    </Button>
                </ContainerButton>
            </BoxBottom>
        </EntranceContainer>
    )
}