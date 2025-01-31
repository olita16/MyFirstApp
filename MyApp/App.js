import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from './src/screens/RegistrationScreen';
import HomeIndicator from './src/components/HomeIndicator';

export default function App() {
  return (
    <>
      <RegistrationScreen />
      <StatusBar style='auto' />
      <HomeIndicator />
    </>
  );
}