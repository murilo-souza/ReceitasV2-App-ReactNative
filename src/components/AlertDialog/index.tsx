import React from 'react'
import {
  ActionWrapper,
  AlertDescription,
  AlertText,
  ConteredView,
  DeleteAlert,
  NotStayButton,
  NotStayText,
  StayButton,
  StayText,
} from './styles'

interface AlertDialogProps {
  alert: string
  description: string
  stayText: string
  notStayText: string
  stay: () => void
  notStay: () => void
}

export function AlertDialog({
  alert,
  description,
  stay,
  stayText,
  notStayText,
  notStay,
}: AlertDialogProps) {
  return (
    <ConteredView>
      <DeleteAlert>
        <AlertText>{alert}</AlertText>
        <AlertDescription>{description}</AlertDescription>
        <ActionWrapper>
          <StayButton onPress={stay}>
            <StayText>{stayText}</StayText>
          </StayButton>
          <NotStayButton onPress={notStay}>
            <NotStayText>{notStayText}</NotStayText>
          </NotStayButton>
        </ActionWrapper>
      </DeleteAlert>
    </ConteredView>
  )
}
