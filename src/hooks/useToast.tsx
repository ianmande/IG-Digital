// Vendors
import { useState, useCallback } from 'react'
import { AlertColor } from '@mui/material/Alert'

// Components
import { Toast } from 'components'

interface useToastProps {
  open?: boolean
  messages: string
  severity: AlertColor
}

export const useToast = ({ messages, severity }: useToastProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const openToast = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeToast = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    Toast: (
      <Toast
        open={isOpen}
        message={messages}
        severity={severity}
        handleClose={closeToast}
      />
    ),
    openToast,
  }
}
