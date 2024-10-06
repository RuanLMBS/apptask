import { InputAddTask } from '../../components/InputAddTask';
import { InputDescription } from '../../components/InputDescription';
import { Container } from './styles';
import { Footer } from '../../components/Footer';
import { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ButtonContainer, CancelButton, AddButton, AddButtonText, ButtonText } from './styles';
import { Alert, View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import { useNavigation } from '@react-navigation/native';
import { Formik, FormikProps } from 'formik';
import { Text } from 'react-native';
import * as Yup from 'yup';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function AddTask({ route }: any) {
    const navigation = useNavigation<Props['navigation']>();

//    const [taskText, setTaskText] = useState('');
//    const [taskDescription, setTaskDescription] = useState('');
    const { task, tasks, createTask } = useContext(TaskContext);

    const taskSchema = Yup.object().shape({
        taskText: Yup.string()
        .min(4,"No mínimo 6 caractéres!")
        .max(30,"No máximo 30 caractéres!")
        .required("Tarefa não pode ser vazia!"),
        taskDescription: Yup.string()
        .required("Descrição não pode ser vazia!")
    })

    function handleTaskAdd(taskText: string, taskDescription: string) {
        if (tasks.some((task) => task.title === taskText)) {
            return Alert.alert("Erro", "Tarefa já existe!")
        }
        createTask(taskText, taskDescription);
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
                <Formik
                    initialValues={{taskText:'',taskDescription:''}}
                    validationSchema={taskSchema}
                    onSubmit={(values, {resetForm})=>{
                        handleTaskAdd(values.taskText,values.taskDescription);
                        resetForm({values:{taskText:'',taskDescription:''}})          
                    }}
                > 
                    {({handleSubmit, handleChange, handleBlur,values,errors,touched}) => (
                   
                        <Container>
                            <InputAddTask
                                onPress={handleSubmit}
                                onChangeText={handleChange('taskText')}
                                onBlur={handleBlur('taskText')}
                                value={values.taskText}
                            />
                            <InputDescription
                                    onPress={handleSubmit}
                                    onChangeText={handleChange('taskDescription')}
                                    onBlur={handleBlur('taskDescription')}
                                    value={values.taskDescription}
                            />

                            {touched.taskText && errors.taskText && (
                                <Text style={{color:'red'}}>{errors.taskText}</Text>
                            )}
                            {touched.taskDescription && errors.taskDescription && (
                                <Text style={{color:'red'}}>{errors.taskDescription}</Text>
                            )}
                             <ButtonContainer>
                                <CancelButton>
                                    <ButtonText>Cancelar</ButtonText>
                                </CancelButton>
                                <AddButton onPress={()=>handleSubmit()}>
                                    <AddButtonText>Adicionar tarefa</AddButtonText>
                                </AddButton>
                            </ButtonContainer>
                            </Container>   
                   )}
                </Formik>

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