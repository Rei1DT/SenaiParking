import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const buttonWidth = width * 0.8; // botão ocupa 80% da tela
const logoSize = width * 0.35;   // logo ocupa 35% da largura da tela
const inputWidth = width * 0.9;  // inputs ocupam 90% da tela

export const LoginContainer = styled.View`
    flex: 1;
    background-color: black;
    align-items: center;
    justify-content: center;
    padding: 20px;
`
export const BoxTop = styled.View`
  align-items: center;
  margin-bottom: 20px;
`

export const BoxMid = styled.View`
  width: 100%;
  margin-bottom: 20px;
`

export const BoxBottom = styled.View`
  align-items: center;
  margin-top: 20px;
`

export const Logo = styled.Image`
    width: ${logoSize}px;
    height: 120px;
    margin-bottom: 10px;
`

export const LoginTitle = styled.Text`
    font-weight: bold;
    color: #ffff;
    font-size: 28px;
`

export const BoxInput = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #606060;
  background-color: #606060;
  border-radius: 40px;
  padding: 5px;
  margin-bottom: 15px;
  width: ${inputWidth}px;
`

export const StyledInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #ffff;
`

export const LabelText = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
  color: #ffff;
  align-self: flex-start;
  margin-left: ${(width * 0.02)}px;
`

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