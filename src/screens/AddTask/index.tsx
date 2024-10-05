import { InputAddTask } from '../../components/InputAddTask';
import { InputDescription } from '../../components/InputDescription';
import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ButtonContainer, CancelButton, AddButton, AddButtonText, ButtonText } from './styles';
import { Alert, View, StyleSheet } from 'react-native';

/*
type Props = NativeStackScreenProps<RootStackParamList>;
const navigation = useNavigation<Props['navigation']>();
*/
export default function AddTask({ route }: any) {
    const [taskText, setTaskText] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const { task, tasks, createTask } = useContext(TaskContext);
    function handleTaskAdd() {
        if (taskText == "") {
            return Alert.alert("Erro", "Tarefa está sem título!");
        }

        if (taskDescription == "") {
            return Alert.alert("Erro", "Tarefa sem descrição!")
        }

        if (tasks.some((task) => task.title === taskText)) {
            return Alert.alert("Erro", "Tarefa já existe!")
        }

        createTask(taskText, taskDescription);
        setTaskText('');
        setTaskDescription('');
    }
    return (
        <View style={styles.container}>
            <Container>
                <InputAddTask
                    onPress={handleTaskAdd}
                    onChangeText={setTaskText}
                    value={taskText}
                />
                <InputDescription
                    onPress={handleTaskAdd}
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                />
                <ButtonContainer>
                    <CancelButton>
                        <ButtonText>Cancelar</ButtonText>
                    </CancelButton>
                    <AddButton onPress={handleTaskAdd}>
                        <AddButtonText>Adicionar tarefa</AddButtonText>
                    </AddButton>
                </ButtonContainer>
            </Container>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252422',
        justifyContent: 'flex-start',
        paddingTop: 64,
        gap: 16,
    },

});