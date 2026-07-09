import { Stack,SplashScreen } from "expo-router";

import "@/global.css"

import { useFonts } from "expo-font";
import { useEffect } from "react";


export const unstable_settings = {
  initialRouteName: "(tabs)",
};

export default function Rootlayout(){
  const [fonstLoaded]=useFonts({
    'sans-regular':require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-bold':require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-semibold':require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-extrabold':require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light':require('../assets/fonts/PlusJakartaSans-Light.ttf'),
  })

  useEffect(()=>{
    if(fonstLoaded){
      SplashScreen.hideAsync();
    }
  }, [fonstLoaded])

  if(!fonstLoaded){
    return null;
  }

  return(
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
  )
}