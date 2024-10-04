import { Container, ContainerHeader, ContainerBottom, InputTitle } from './styles'
import { Text } from 'react-native';
import {Feather} from '@expo/vector-icons'

type Props = {
    onPress: ()=>void;
    onChangeText:(text:string) => void;
    value: string;
}
export function InputAddTask({onPress, onChangeText, value} : Props) {
    return(
        <Container>
            <ContainerHeader><Text>Título</Text></ContainerHeader>
            <InputTitle
                placeholder='Input'
                keyboardType='default'
                value={value}
                onChangeText={onChangeText}
            />
        </Container>
    );
}