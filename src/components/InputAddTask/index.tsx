import { Container, ContainerHeader, ContainerBottom, InputTitle } from './styles'
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

type Props = {
    onPress: () => void;
    onChangeText: (text: string) => void;
    value: string;
}
export function InputAddTask({ onPress, onChangeText, value }: Props) {
    return (
        <Container>
            <ContainerHeader>
                <Text style={{ color: '#fffcf2a' }}>
                    Título
                </Text>
            </ContainerHeader>
            <InputTitle
                placeholder='Escreva aqui o nome da tarefa'
                placeholderTextColor={'#ccc5b9'}
                keyboardType='default'
                value={value}
                onChangeText={onChangeText}
            />
        </Container>
    );
}