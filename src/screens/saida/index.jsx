import { useState } from "react";
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { getAxiosWithToken } from '../../api';

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
    const [placa, setPlaca] = useState("");
    const navigation = useNavigation();

    const handleExit = async () => {
        try {
            const axiosInstance = await getAxiosWithToken();
            await axiosInstance.put('/api/veiculos/saida', {
                placa
            });
            Alert.alert('Sucesso', 'Saída liberada com sucesso!', [
                { text: 'OK', onPress: () => navigation.navigate('ListaDeVagas') }
            ], { cancelable: false });
        } catch (error) {
            console.error('Erro ao registrar saída:', error?.response?.data || error.message || error);
            Alert.alert('Erro', 'Erro ao registrar saída. Tente novamente.');
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