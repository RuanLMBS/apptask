import {DescriptionInput} from './styles'

type Props = {
    onPress:()=>void;
    onChangeText:(text:string)=>void;
    value:string;
}

export function InputDescription({onPress,onChangeText,value}:Props) {
    return(
        <DescriptionInput
        placeholder='Descrição'
        keyboardType='default'
        value={value}
        onChangeText={onChangeText}
        />
    );
}