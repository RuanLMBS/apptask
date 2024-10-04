import {Feather} from '@expo/vector-icons'
import { Container, IconContainer, AddButton } from './styles';
import { RootStackParamList } from '../../utils/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTask from '../../screens/AddTask';

type Props = NativeStackScreenProps<RootStackParamList>;

export function Footer() {
    const navigation=useNavigation<Props['navigation']>();
    
    function handleAddPress(){
        navigation.navigate('AddTask');
    }

    function handleHomePress() {
        navigation.navigate('Home');
    }
    return(
        <Container>
            <IconContainer
                onPress={handleHomePress}
            >
               <Feather name="home" size={50} color="#000000"/>
            </IconContainer>
            <AddButton 
                onPress={handleAddPress}> 
                <Feather name="plus" size={20} color="#000000"/>
            </AddButton>
            <IconContainer>
                <Feather name="user" size={50} color="#000000"/>
            </IconContainer>
        </Container>
    );
};