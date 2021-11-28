// Vendors
import ReactDOM from 'react-dom'
import { Snackbar, Alert, AlertColor, Slide, SlideProps } from '@mui/material'

interface ToastProps {
  open: boolean
  handleClose: () => void
  severity: AlertColor
  message: string
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />
}

const Toast = ({ open, handleClose, message, severity }: ToastProps) => {
  const conatiner: HTMLElement | null = document.getElementById('root-modal')

  return ReactDOM.createPortal(
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      TransitionComponent={open ? SlideTransition : undefined}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>,
    conatiner || document.body
  )
}

export default Toast
