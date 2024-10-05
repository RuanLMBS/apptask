import styled from 'styled-components/native';

export const Container = styled.View`
    display:flex;
    width: 90%;
    height: 80px;
    justify-content: space-between;
    flex-direction: row;
    background-color: transparent;
    overflow: hidden;
    borderBottomWidth:1px;
    borderBottomColor: #eb5e28;
    float:right;
`;

export const ContainerHeader = styled.View`
    width:100%;
    height:40%;
    padding: 5px;
    
    `;

export const InputTitle = styled.TextInput`
    position:absolute;
    bottom:0;
    width:100%;
    height:60%;
    padding: 5px;
    color: #fffcf2;
`;

export const ContainerBottom = styled.View`
    
`