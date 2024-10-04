import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: #fff;
`;


export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
  text-align: left;
`;

export const CancelButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #6a1b9a; 
  padding: 10px 20px;
  border-radius: 25px; 
  background-color: transparent; 
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #6a1b9a; 
`;
