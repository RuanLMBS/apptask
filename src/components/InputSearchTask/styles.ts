import styled from 'styled-components/native';

export const Container = styled.View`
    display:flex;
    width: 90%;
    height: 56px;
    justify-content: space-between;
    flex-direction: row;
    background-color: #403d39;
    border-radius: 28px;
    overflow: hidden;
`;

export const Input = styled.TextInput`
    flex: 1;
    padding:15px;
    color:#ccc5b9;
`

export const InputButton = styled.TouchableOpacity`
    padding:16px;
`