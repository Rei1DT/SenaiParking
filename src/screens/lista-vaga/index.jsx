import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Feather, Truck, Calendar, Clock } from 'react-native-feather';
import { Container, Header, VagaItem, IconContainer, TextContainer, Logo} from './style';

const vagas = [
  { id: 'A1', placa: 'ABC-1234', data: '09/24/2025', hora: '14:30:00' },
  { id: 'A2', placa: 'DEF-5678', data: '09/25/2025', hora: '08:15:00' },
  { id: 'A3', placa: 'GHI-9101', data: '09/26/2025', hora: '10:45:00' },
  { id: 'A4', placa: 'JKL-2345', data: '09/27/2025', hora: '11:30:00' },
  { id: 'A5', placa: 'MNO-6789', data: '09/28/2025', hora: '13:00:00' }
];

const VagasScreen = () => {
  return (
    <Container>
      <Header>
        <Logo
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Text style={{ color: 'white', fontSize: 24, marginLeft: 10 }}>Lista de Vagas</Text>
      </Header>

      <ScrollView>
        {vagas.map((vaga) => (
          <VagaItem key={vaga.id}>
            <IconContainer>
              <Truck width={24} height={24} color="#4d4d4d" />
            </IconContainer>
            <TextContainer>
              <Text style={{ color: '#4d4d4d', fontSize: 16 }}>
                <Calendar width={16} height={16} color="#4d4d4d" /> Placa: {vaga.placa}
              </Text>
              <Text style={{ color: '#4d4d4d', fontSize: 14 }}>
                <Calendar width={16} height={16} color="#4d4d4d" /> Data: {vaga.data}
              </Text>
              <Text style={{ color: '#4d4d4d', fontSize: 14 }}>
                <Clock width={16} height={16} color="#4d4d4d" /> Hora: {vaga.hora}
              </Text>
            </TextContainer>
          </VagaItem>
        ))}
      </ScrollView>
    </Container>
  );
};

export default VagasScreen;