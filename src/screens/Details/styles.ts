import styled from "styled-components/native";

/*export const Container = styled.View`
    flex: 1;
    padding: 24px;
    background-color: #fff;
`;*/

export const Container = styled.View`
    padding:16px;
`;

export const Line = styled.Text`
  font-size: 36px;
  color:white;
`;

export const PageTitle = styled.Text`
  font-weight:bold;
  font-size: 36px;
  color:white;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
  text-align: left;
`;

export const Infos = styled.Text`
  font-size:16px;
  color:white;
  margin-bottom: 16px;
  text-align: left;
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

export const ConcluirBtn = styled.TouchableOpacity`
  background-color: #eb5e28; 
  padding: 10px 20px;
  border-radius: 25px; 
`;

/*export const CancelButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #6a1b9a; 
  padding: 10px 20px;
  border-radius: 25px; 
  background-color: transparent; 
`;*/

export const DeleteButtonText = styled.Text`
  font-size: 16px;
  color: #eb5e28; 
`;

export const StatsButtonText = styled.Text`
  font-size: 16px;
  color: white; 
`;


