import {Feather} from '@expo/vector-icons'
import {Container,TaskText,TaskDone,TaskOptions} from './styles' 
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { TaskProps } from '../../utils/types';
import { TaskContextProps } from '../../context/TaskContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types';

export function Task({ task }: { task: TaskProps }){
    const {tasks, setTasks} = useContext(TaskContext);
    type Props = NativeStackScreenProps<RootStackParamList>;
    const navigation=useNavigation<Props['navigation']>();
    
    function handlePress() {
        navigation.navigate('Details',{task}); 
    }

    function handleTaskDone(taskToChange:TaskProps ) {
  /*      const updatedTasks=tasks.filter((task)=>task.title!==taskToChange.title);
        const newTask = {
            id: taskToChange.id,
            title: taskToChange.title,
            description: taskToChange.description,
            status: !taskToChange.status
        } 
        updatedTasks.push(newTask);*/
        const updatedTasks = tasks.map((t) => {
            if (t.title === taskToChange.title) {
                console.log(`Mudando status da tarefa: ${t.title} de ${t.status} para ${!t.status}`);
                return { ...t, status: !t.status }; // Inverte o status
            }
            return t; // Retorna a tarefa sem alterações
        });
        setTasks(updatedTasks);
        console.log(tasks);
    }
    return(
        <Container>
            <TaskText>{task.title}</TaskText>
              <TaskDone style={task.status ? {backgroundColor:'#28F616'}:{}} onPress={()=>handleTaskDone(task)}> 
                {!task.status && <Feather name="circle" size={24} color="white"></Feather>}
                {task.status && <Feather name="check-circle" size={24} color="white"></Feather>}
              </TaskDone>
              <TaskOptions onPress={handlePress}>
                  <Feather name="more-vertical" size={24} color="#000000"></Feather>
              </TaskOptions>
        </Container>
    );
}