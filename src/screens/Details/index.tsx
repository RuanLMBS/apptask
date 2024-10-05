import { ButtonContainer, CancelButton, Container, PageTitle, Title, Infos, ConcluirBtn, DeleteButtonText, StatsButtonText } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, TaskProps } from "../../utils/types";
import { Footer } from "../../components/Footer";
import { Alert } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route}: Props) {
    const {task} = route.params;
    const {tasks, setTasks} = useContext(TaskContext);
    const navigation=useNavigation<Props['navigation']>();

    function handleTaskDelete(taskToDelete: TaskProps) {
        Alert.alert(
            "Atenção!",`Deseja realmente remover a tarefa ${taskToDelete.title}?`,
            [
                {text:"Sim",
                    onPress:()=>{
                        const updatedTasks = tasks.filter((task)=>task!=taskToDelete);
                        setTasks(updatedTasks);
                        navigation.navigate('Home');
                    }
                },
                {text:"Cancelar",style:"cancel"}
            ]
        )
    }

    function handleTaskDone(taskToChange:TaskProps ) {
        const updatedTasks = tasks.map((t) => {
            if (t.title === taskToChange.title) {
                return { ...t, status: !t.status }; 
            }
            return t; 
        });
        setTasks(updatedTasks);
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
        <Container>
            <PageTitle>Detalhes da Tarefa</PageTitle>
            <Title>______________________</Title>
            <Title>Título:</Title>
            <Infos>{task.title}</Infos>
            <Title>Descrição:</Title>
            <Infos>{task.description}</Infos>
            <ButtonContainer>
                    <CancelButton onPress={()=>handleTaskDelete(task)}>
                        <DeleteButtonText>Deletar Tarefa</DeleteButtonText>
                    </CancelButton>
                    <ConcluirBtn onPress={()=>handleTaskDone(task)}>     
                        <StatsButtonText>
                        {!task.status && <StatsButtonText>Marcar como concluida</StatsButtonText>}
                        {task.status && <StatsButtonText>Marcar como não concluida</StatsButtonText>}
                        </StatsButtonText>
                    </ConcluirBtn>
            </ButtonContainer>
            
        </Container>  
        <Footer/>
        </View>
    )
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