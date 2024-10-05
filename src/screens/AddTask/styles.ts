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
  gap: 32px;
  margin-top: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #eb5e28; 
  padding: 10px 20px;
  border-radius: 25px; 
  background-color: transparent; 
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #eb5e28; 
  padding: 10px 20px;
  border-radius: 25px; 
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #eb5e28; 
`;

export const AddButtonText = styled(ButtonText)`
color: #fffcf2;
`;