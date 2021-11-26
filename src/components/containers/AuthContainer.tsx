// Vendors
import { ReactElement } from 'react'
import { Container, Paper } from '@mui/material'

interface AuthContainerProps {
  brandLogin?: ReactElement<any, any> | React.ReactNode
  branCreate?: ReactElement<any, any> | React.ReactNode
}

export const AuthContainer: React.FC<AuthContainerProps> = ({
  brandLogin,
  branCreate,
  children,
}) => {
  return (
    <div className="flex min-h-screen max-h-screen items-center">
      <Container>
        <div className="grid grid-cols-2 rounded-md border-white bg-black-light overflow-hidden">
          {brandLogin && <div className="max-w-md p-4">{brandLogin}</div>}
          <Paper className="bg-black-light">
            <div>{children}</div>
          </Paper>
          {branCreate && <div className="max-w-md p-4">{branCreate}</div>}
        </div>
      </Container>
    </div>
  )
}
