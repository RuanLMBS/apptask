import { DescriptionInput } from './styles'

type Props = {
    onPress: () => void;
    onChangeText: (text: string) => void;
    onBlur:(e:any)=>void;
    value: string;
}

export function InputDescription({ onPress, onChangeText,onBlur, value }: Props) {
    return (
        <DescriptionInput
            placeholder='Descrição'
            placeholderTextColor={'#ccc5b9'}
            keyboardType='default'
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
        />
    );
}