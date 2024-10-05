import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Task } from '../../components/Task';
import { InputSearchTask } from '../../components/InputSearchTask';
import { Footer } from '../../components/Footer';
import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';

export default function Home() {

  const { tasks } = useContext(TaskContext);

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
            <Text style={styles.emptyText}>Nenhuma tarefa casdastrada!</Text>
          </View>
        )
        }

      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252422',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 64,
    gap: 16,
  },
  emptyText: {
    fontWeight:'bold',
    color:'white'
  }
});

