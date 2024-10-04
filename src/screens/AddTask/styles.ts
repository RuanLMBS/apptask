import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  padding: 20px;
  gap:30px;
  align-items:center;
  `;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #6a1b9a; 
  padding: 10px 20px;
  border-radius: 25px; 
  background-color: transparent; 
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #e6d8f3; 
  padding: 10px 20px;
  border-radius: 25px; 
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #6a1b9a; 
`;

export const AddButtonText = styled(ButtonText)`
color: #000;
`;