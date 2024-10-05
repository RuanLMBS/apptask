import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    display:flex;
    width: 90%;
    height: 56px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: #403d39;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
    padding:16px;
    border-radius:45px;
`;

export const TaskText = styled.Text`
    color: #ccc5b9;
    font-size: 16px;
    font-weight: 500;
    flex-grow:1;

`;

export const TaskDone = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    border-radius:10px;
`;

export const TaskOptions = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
`;



