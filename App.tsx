import React from 'react'
/* eslint-disable camelcase */
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/theme'
import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="light" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
