import {Feather} from '@expo/vector-icons'
import { Container, Input, InputButton } from './styles';

export function InputSearchTask() {
    return(
        <Container>
            <Input
                placeholder='Pesquise uma tarefa aqui'
                keyboardType='default'
            />
            <InputButton>            
                <Feather name='search' size={24} color="#000000"/>
            </InputButton>
        </Container>
    );
};