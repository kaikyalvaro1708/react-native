import { View, Text} from 'react-native'


type Props = {
    navigation:undefined;
}
const DetailsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
        
        <Text> Bem vindo</Text>
      
    </View>
  );
}

export default DetailsScreen;

// VStack serve como o View