import { Center, Icon, Text } from 'native-base';
import { Fontisto } from '@expo/vector-icons'

import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';
import LogoNlw from '../assets/logo.svg';


export const SignIn = () => {
  const { signIn, user } = useAuth();

  console.log('DADOS DO USUÁRIO: ', user);
  

  return (
    <Center flex={1} bgColor='gray.900' p='7' >
      <LogoNlw width={212} height={40} />

      <Button
        title='Entrar com Google'
        onPress={signIn}
        type='secondary'
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='sm' />}
        mt='12'
      />

      <Text color='white' textAlign='center' mt='4' >
        Não utilizamos nenhuma informação além {'\n'} 
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}