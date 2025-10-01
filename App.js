import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import Lista from './src/screens/lista-vaga';
import Entrada from './src/screens/entrada'
import Saida from './src/screens/saida'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ContainerApp = styled.View`
  flex: 1;
  background-color: #fff;
`

const Stack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },

  screens: {
    Login: Login,
    SignUp: Cadastro,
    Vagas: Lista,
    Entrada: Entrada,
    Saida: Saida,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <Navigation /> 
    </ContainerApp>

  );
};