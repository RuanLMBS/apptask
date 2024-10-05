import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../components/Task';
import { InputSearchTask } from '../../components/InputSearchTask';
import { Footer } from '../../components/Footer';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
//import { InputDescription } from './src/components/InputDescription';

export default function Home() {

  const { tasks } = useContext(TaskContext);
  //  const [tasks, setTasks] = useState<{description: string; check:boolean}[]>([]); //Lista de tarefas fica aqui
  const [taskText, setTaskText] = useState("");

  //abaixo é o que será renderizado
  return (
    <View style={styles.container}>
      <InputSearchTask />
      <FlatList
        contentContainerStyle={{
          alignItems: 'center'
        }}
        data={tasks} // dado que será apresentado na flatflist
        keyExtractor={
          (item, index) => index.toString() // para diferenciar as tasks
        }
        renderItem={({ item }) => (
          <Task
            task={item}
          /> // o objeto do tipo item é passado como as tasks 
        )}
        ListEmptyComponent={() => (
          <View>
            <Text>Nenhuma tarefa cadastrada!</Text>
          </View>
        )
        }

      />
      <Footer />
    </View>
  );
  //acima é o que será renderizado
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252422',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // padding: 16,
    paddingTop: 64,
    gap: 16,
  },
});

