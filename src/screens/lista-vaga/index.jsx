import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { Calendar, Clock, CreditCard, Plus } from "react-native-feather";
import { useNavigation, useIsFocused } from "@react-navigation/native";
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
  ButtonText,
  SimpleButton,
  ButtonContent,
  ButtonLabel
  , FloatingButtonWrapper, FabButton
} from "./style";

export default function VagasScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [vagas, setVagas] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  async function fetchVagas() {
    try {
      const axiosInstance = await getAxiosWithToken();
      const response = await axiosInstance.get('/api/veiculos');
      setVagas(response.data);
    } catch (error) {
      console.error('Erro ao buscar vagas:', error?.response?.data || error.message || error);
      setVagas([]);
    }
  }

  useEffect(() => {
    // Recarrega a lista sempre que a tela fica em foco
    if (isFocused) fetchVagas();
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <Logo source={require("../../assets/images/logo.png")} resizeMode="contain" />
        <Text style={{ color: "white", fontSize: 30, marginTop: 10 }}>Lista de Vagas</Text>
      </Header>

      {/* Botão global para registrar nova entrada (aparece uma vez na tela) */}
        {/* Floating Action Button (Registrar Entrada) */}
        <FloatingButtonWrapper pointerEvents="box-none">
          <FabButton onPress={() => navigation.navigate("Entrada")}>
            <Plus width={28} height={28} color="#fff" />
          </FabButton>
        </FloatingButtonWrapper>

  <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingBottom: 120 }}>
        {vagas.map((vaga, idx) => (
          <VagaItem
            key={idx}
            $active={activeIndex === idx}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setActiveIndex(activeIndex === idx ? null : idx)}
              style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
            >
              <IconContainer style={{ justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
                <Image source={require('../../assets/images/car-image.png')} style={{ width: 36, height: 28, resizeMode: 'contain' }} />
              </IconContainer>

              <TextContainer style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 20 }}>
                  <CreditCard width={16} height={16} color="white" /> Placa: {vaga.placa}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  <Calendar width={16} height={16} color="white" /> Data: {vaga.dataEntrada}
                </Text>
                <Text style={{ color: "white", fontSize: 20 }}>
                  <Clock width={16} height={16} color="white" /> Hora: {vaga.horarioEntrada}
                </Text>
              </TextContainer>
            </TouchableOpacity>

            {activeIndex === idx && (
              <>
                <ContainerButton>
                  <Button onPress={() => navigation.navigate("Saida")}>
                    <GradientButton>
                      <ButtonText>Registrar Saida</ButtonText>
                    </GradientButton>
                  </Button>
                </ContainerButton>
              </>
            )}
          </VagaItem>
        ))}
      </ScrollView>
    </Container>
  );
}
