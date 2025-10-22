import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Truck, Calendar, Clock } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_BASE_URL, getAxiosWithToken } from "../../api";
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

export default function VagasScreen() {
  const navigation = useNavigation();
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    async function fetchVagas() {
      try {
        const axiosInstance = await getAxiosWithToken();
        const response = await axiosInstance.get('/api/veiculos');
        setVagas(response.data);
      } catch (error) {
        setVagas([]);
      }
    }
    fetchVagas();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
        <Text style={{ color: "white", fontSize: 24, marginTop: 10 }}>Lista de Vagas</Text>
      </Header>

      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {vagas.map((vaga, idx) => (
          <VagaItem key={idx}>
            <IconContainer>
              <Truck width={24} height={24} color="white" />
            </IconContainer>

            <TextContainer>
              <Text style={{ color: "white", fontSize: 16 }}>
                <Calendar width={16} height={16} color="white" /> Placa: {vaga.placa}
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                <Calendar width={16} height={16} color="white" /> Data: {vaga.dataEntrada}
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                <Clock width={16} height={16} color="white" /> Hora: {vaga.horarioEntrada}
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
