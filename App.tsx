import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import AddTask from './src/screens/AddTask'
import TaskProvider from './src/context/TaskContext';
import Details from './src/screens/Details';

//import { InputDescription } from './src/components/InputDescription';

export default function App() {
  
//  const [tasks, setTasks] = useState<{description: string; check:boolean}[]>([]); //Lista de tarefas fica aqui
//  const [taskText, setTaskText] = useState("");
  //abaixo é o que será renderizado
  
  const Stack = createNativeStackNavigator();
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="AddTask" component={AddTask}/>
          <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
  //acima é o que será renderizado
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },

});

