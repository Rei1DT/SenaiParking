import React from "react";
import { ScrollView, Text } from "react-native";
import { Truck, Calendar, Clock } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  Logo,
  VagaItem,
  IconContainer,
  TextContainer,
  ContainerButton,
  GradientButton,
  Button,
  ButtonText
} from "./style";

const vagas = [
  { id: "A1", placa: "ABC-1234", data: "09/24/2025", hora: "14:30:00" },
  { id: "A2", placa: "DEF-5678", data: "09/25/2025", hora: "08:15:00" },
  { id: "A3", placa: "GHI-9101", data: "09/26/2025", hora: "10:45:00" },
  { id: "A4", placa: "JKL-2345", data: "09/27/2025", hora: "11:30:00" },
  { id: "A5", placa: "MNO-6789", data: "09/28/2025", hora: "13:00:00" },
];

export default function VagasScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
        <Text style={{ color: "white", fontSize: 24, marginTop: 10 }}>Lista de Vagas</Text>
      </Header>

      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {vagas.map((vaga) => (
          <VagaItem key={vaga.id}>
            <IconContainer>
              <Truck width={24} height={24} color="white" />
            </IconContainer>

            <TextContainer>
              <Text style={{ color: "white", fontSize: 16 }}>
                <Calendar width={16} height={16} color="white" /> Placa: {vaga.placa}
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                <Calendar width={16} height={16} color="white" /> Data: {vaga.data}
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                <Clock width={16} height={16} color="white" /> Hora: {vaga.hora}
              </Text>
            </TextContainer>

            <ContainerButton>
              <Button onPress={() => navigation.navigate("Entrada")}>
                <GradientButton>
                  <ButtonText>Registrar Entrada</ButtonText>
                </GradientButton>
              </Button>
            </ContainerButton>
            <ContainerButton>
              <Button onPress={() => navigation.navigate("Saida")}>
                <GradientButton>
                  <ButtonText>Registrar Saida</ButtonText>
                </GradientButton>
              </Button>
            </ContainerButton>
          </VagaItem>
        ))}
      </ScrollView>
    </Container>
  );
}
