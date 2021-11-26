// Vendors
import { ReactElement } from 'react'
import { Container, Paper } from '@mui/material'

interface AuthContainerProps {
  brandLogin: ReactElement<any, any> | React.ReactNode
}

export const AuthContainer: React.FC<AuthContainerProps> = ({
  brandLogin,
  children,
}) => {
  return (
    <Container>
      <Paper className="flex bg-black-light">
        <div className="">{brandLogin}</div>
        <div>{children}</div>
      </Paper>
    </Container>
  )
}
