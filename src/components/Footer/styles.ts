import styled from 'styled-components/native';

export const Container = styled.View`
    box-model: border-box;    
    position:absolute;
    bottom:0;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    backgroundColor:#403d39 ;
    padding:20px;
    borderTopWidth:0.5px;
    borderTopColor:#000000;
    width: 100%;
`;

export const IconContainer = styled.TouchableOpacity`
    flex: 1;
    alignItems: center;
`

export const AddButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 80%;
    left: 45%;
    width: 100px;
    height: 100px;
    borderRadius: 50px;
    backgroundColor: #eb5e28;
    justifyContent: center;
    alignItems: center;
    borderWidth: 1px;
    borderColor: #ccc;
`