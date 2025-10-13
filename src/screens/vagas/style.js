import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const buttonWidth = width * 0.8; // botão ocupa 80% da tela
const logoSize = width * 0.35;   // logo ocupa 35% da largura da tela
const inputWidth = width * 0.9;  // inputs ocupam 90% da tela

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  width: ${logoSize}px;
  height: 120px;
  margin-bottom: 10px;
`

export const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0;
`;

export const VagasWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: ${inputWidth}px;
  margin-bottom: 40px;
`;

export const Coluna = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const VagaContainer = styled.TouchableOpacity`
  background-color: ${(props) => (props.isSelected ? '#0C1F47' : '#1A1A1A')};
  border-radius: 15px;
  padding: 10px;
  width: 80px;
  align-items: center;
  border: 2px solid ${(props) => props.isSelected ? '#3C82F6' : props.isEmpty ? '#757575' : '#1A1A1A'};
`;

export const VagaTexto = styled.Text`
  color: white;
  margin-top: 5px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity`
    width: ${buttonWidth}px;
    height: 50px;
    border-radius: 40px;
    overflow: hidden;
`
export const GradientButton = styled(LinearGradient).attrs({
    colors: ["rgba(30, 30, 30, 0.50)", "rgba(1, 98, 227, 0.50)"],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: rgba(1, 98, 227, 0.7);
  border-radius: 40px;
`

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffff;
  font-size: 16px;
`
