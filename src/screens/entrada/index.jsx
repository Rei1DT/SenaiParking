import { useState } from "react";
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

    const handleEntrance = () => {
        console.log("Dados da placa:", { placa });
        // Aqui você pode chamar sua API ou serviço de autenticação
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