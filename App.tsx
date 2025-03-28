//Importa o componente Status Bar do Expo, que permite customizar a barra de status do dispositivo.
//Importa os modulos necessários para navegação no aplicativo

// Importa os modulos necessarios para navegacao no aplicativo
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Importa as telas que serão utilizadas na navegação
import HomeScreen from "./src/Screens/Home";
import Details from "./src/Screens/DetailsScreen";
//import DetailsScreen from './screens/DetailsScreen'

//Definir os tipos das rotas para garantir tipagem segura no typescript
type RootStackParamList = {
  Home: undefined; // A tela home não recebe nenhum parametro
  Details: undefined; // A tela details nao recebe nehum parametro
};

//Cria o stack navigator, que gerencia a navegação entre as telas.
const Stack = createStackNavigator<RootStackParamList>();

//Componentes principal do aplicativo
const App: React.FC = () => {
  return (
    // O navigationContainer é o elemento principal que envolve toda a navegação do app
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomePage" }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//Exportar o componente App;

export default App;
