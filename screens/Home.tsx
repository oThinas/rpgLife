import { SafeAreaView, Text } from 'react-native';

export function Home() {
  return (
    <SafeAreaView className='flex-1 justify-center items-center bg-red-700'>
      <Text className='text-black text-4xl'>
        Home
      </Text>
    </SafeAreaView>
  );
}
