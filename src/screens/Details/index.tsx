import { ButtonText, CancelButton, Container, Title } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, TaskProps } from "../../utils/types";
import { Footer } from "../../components/Footer";
import { Alert } from "react-native";
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
    return(
        <Container>
            <Title>{task.title}</Title>
            <Title>{task.description}</Title>
            <CancelButton onPress={()=>handleTaskDelete(task)}>
                <ButtonText>Deletar Tarefa</ButtonText>
            </CancelButton>
            <Footer/>
        </Container>    
    )
}