import { Container, ContainerHeader, ContainerBottom, InputTitle } from './styles'
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

type Props = {
    onPress: () => void;
    onChangeText: (text: string) => void;
    onBlur:(e:any)=>void;
    value: string;
}
export function InputAddTask({ onPress, onChangeText, onBlur, value }: Props) {
    return (
        <Container>
            <ContainerHeader>
                <Text style={{ color: 'white' }}>
                    Título
                </Text>
            </ContainerHeader>
            <InputTitle
                placeholder='Escreva aqui o nome da tarefa'
                placeholderTextColor={'#ccc5b9'}
                keyboardType='default'
                value={value}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
        </Container>
    );
}