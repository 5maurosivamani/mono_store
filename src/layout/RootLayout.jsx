import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

const RootLayout = ({children}) => {
  return (
    <SafeAreaView className="flex-1">
        {children}
    </SafeAreaView>
  )
}

export default RootLayout

const styles = StyleSheet.create({})