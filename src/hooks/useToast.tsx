// Vendors
import { useState, useCallback } from 'react'
import { AlertColor } from '@mui/material/Alert'

// Components
import { Toast } from 'components'

interface useToastProps {
  isOpen?: boolean
  message: string
  severity: AlertColor
  onCloseCallback?: (() => void) | undefined
}

const toastStateInitial: useToastProps = {
  isOpen: false,
  message: '',
  severity: 'success',
}
export const useToast = () => {
  const [{ isOpen, message, severity, onCloseCallback }, setToast] =
    useState<useToastProps>(toastStateInitial)

  const openToast = useCallback(
    ({ message, severity, onCloseCallback }: useToastProps) => {
      setToast({ isOpen: true, message, severity, onCloseCallback })
    },
    []
  )

  const closeToast = useCallback(
    (callback?: () => void) => {
      setToast(toastStateInitial)
      if (onCloseCallback) onCloseCallback()
    },
    [onCloseCallback]
  )

  return {
    Toast: (
      <Toast
        open={Boolean(isOpen)}
        message={message}
        severity={severity}
        handleClose={closeToast}
      />
    ),
    openToast,
  }
}
