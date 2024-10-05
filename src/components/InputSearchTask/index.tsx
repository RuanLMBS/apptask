import { Feather } from '@expo/vector-icons'
import { Container, Input, InputButton } from './styles';

export function InputSearchTask() {
    return (
        <Container>
            <Input
                placeholder='Pesquise uma tarefa aqui'
                placeholderTextColor='#ccc5b9'
                keyboardType='default'
            />
            <InputButton>
                <Feather name='search' size={23} color="#000000" />
            </InputButton>
        </Container>
    );
};