import React from 'react'
import { View , Text } from 'react-native'
import { Link } from "expo-router"

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold mb-4">Sign In</Text>
      <Link href="/(auth)/sign-up" className="text-blue-500">
        Create Account
      </Link>
    </View>
  )
}

export default SignIn;