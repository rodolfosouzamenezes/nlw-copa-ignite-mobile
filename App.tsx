import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Center, Text } from 'native-base';
import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor='gray.900'>
        <Text color='white' fontSize={22}>opa</Text>
      </Center>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
