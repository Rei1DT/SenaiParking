import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import Lista from './src/screens/lista-vaga';
import Entrada from './src/screens/entrada'
import Saida from './src/screens/saida'

const ContainerApp = styled.SafeAreaView`
flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden />
      <Saida />
    </ContainerApp>

  );
};