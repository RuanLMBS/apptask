import styled from 'styled-components/native';

export const Container = styled.View`
    position:absolute;
    bottom:0;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    backgroundColor: #EDEDED;
    padding:20px;
    borderTopWidth:0.5px;
    borderTopColor:#000000;
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
    backgroundColor: #EDEDED;
    justifyContent: center;
    alignItems: center;
    borderWidth: 1px;
    borderColor: #ccc;
`