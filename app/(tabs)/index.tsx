import "../../global.css"
import { styled } from "nativewind";
import { SafeAreaView  as RNSafeAreaView} from "react-native-safe-area-context";
import { Text, View} from "react-native";
import {Link} from "expo-router"
const SafeAreaView=styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="my-app/app/onboarding" className="mt-4 rounded bg-[#081126] text-white p-4"><Text>Go To Onboarding</Text></Link> 
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-[#081126] text-white p-4"><Text>Go To sign-In</Text></Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-[#081126] text-white p-4"><Text>Go To sign-Up</Text></Link>
      
      <Link href="/subscriptions/spotify"><Text>Spotify Subscription</Text ></Link>
      <Link
           href={{
            pathname:"/subscriptions/[id]",
            params:{id:"claude"}  
          }}
      ><Text>Claude Subscription</Text></Link>
    </SafeAreaView>
  );
}
