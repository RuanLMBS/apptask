import { ButtonContainer,CancelButton,ButtonText,AddButton,AddButtonText } from './style'
type Props = {
  onPress:() => void;
  onAddTask: () => void;
}

export function AddScButtons({onAddTask}:Props) {
    return(
        <ButtonContainer>
          <CancelButton>
            <ButtonText>Cancelar</ButtonText>
          </CancelButton>

          <AddButton onPress={onAddTask}>
            <AddButtonText>Adicionar tarefa</AddButtonText>
          </AddButton>
        </ButtonContainer>
    );
}