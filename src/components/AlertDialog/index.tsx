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
  notStayText?: string
  stay: () => void
  notStay?: () => void
  onlyStay?: boolean
}

export function AlertDialog({
  alert,
  description,
  stay,
  stayText,
  notStayText,
  notStay,
  onlyStay = false,
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
          {!onlyStay && (
            <NotStayButton onPress={notStay}>
              <NotStayText>{notStayText}</NotStayText>
            </NotStayButton>
          )}
        </ActionWrapper>
      </DeleteAlert>
    </ConteredView>
  )
}
