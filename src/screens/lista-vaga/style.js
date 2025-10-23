import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const buttonWidth = width * 0.8; 

export const Container = styled.View`
  flex: 1;
  background-color: #0b0b0b;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 80px;
`;

export const VagaItem = styled.View`
  background-color: #1c1c1e;
  margin: 10px 20px;
  border-radius: 10px;
  padding: 15px;
  /* Adiciona borda azul quando a prop $active for true */
  border-width: ${props => props.$active ? '2px' : '0px'};
  border-color: ${props => props.$active ? 'rgba(1, 98, 227, 0.7)' : 'transparent'};
`;

export const IconContainer = styled.View`
  margin-bottom: 10px;
`;

export const TextContainer = styled.View`
  margin-bottom: 10px;
`;

export const ContainerButton = styled.View`
  align-items: center;    
`

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

export const FloatingButtonWrapper = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  align-items: center;
  z-index: 10;
`;

export const FabButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: rgba(1,98,227,0.95);
  justify-content: center;
  align-items: center;
`;