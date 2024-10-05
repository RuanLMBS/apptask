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
        const updatedTasks = tasks.map((t) => {
            if (t.title === taskToChange.title) {
                return { ...t, status: !t.status }; 
            }
            return t; 
        });
        setTasks(updatedTasks);
    }
    return(
        <Container>
            <TaskText>{task.title}</TaskText>
              <TaskDone style={task.status ? {backgroundColor:'#28F616'}:{}} onPress={()=>handleTaskDone(task)}> 
                {!task.status && <Feather name="circle" size={24} color="white"></Feather>}
                {task.status && <Feather name="check-circle" size={24} color="white"></Feather>}
              </TaskDone>
              <TaskOptions onPress={handlePress}>
                  <Feather name="more-vertical" size={24} color="white"></Feather>
              </TaskOptions>
        </Container>
    );
}