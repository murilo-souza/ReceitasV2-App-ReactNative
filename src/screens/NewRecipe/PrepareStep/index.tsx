import React, { useState } from 'react'
import { Container } from './styles'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

interface StepsProps {
  id: string
  step: string
}

// created_at: firestore.FieldValue.serverTimestamp(),
export function PrepareStep() {
  const [steps, setSteps] = useState<StepsProps[]>([])
  const [step, setStep] = useState('')

  function handleAddNewStep() {
    setSteps([...steps, { id: String(Math.random()), step }])
    setStep('')
  }

  function handleDeleteStep(id: string) {
    const filteredSteps = steps.filter((step) => step.id !== id)
    setSteps(filteredSteps)
  }

  return <Container></Container>
}
