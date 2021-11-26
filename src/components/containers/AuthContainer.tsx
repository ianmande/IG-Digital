// Vendors
import { ReactElement } from 'react'
import { Container, Paper } from '@mui/material'

// Components
import { Copyright } from 'components'

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
    <div className="auth-container">
      <Container>
        <div className="grid grid-cols-2 justify-items-center align-center rounded-md border-white bg-black-light overflow-hidden">
          {brandLogin && <BrandWrapper>{brandLogin}</BrandWrapper>}
          <Paper className="bg-black-light p-5">
            <div>{children}</div>
          </Paper>
          {branCreate && <BrandWrapper>{branCreate}</BrandWrapper>}
        </div>
      </Container>
      <Copyright />
    </div>
  )
}

const BrandWrapper: React.FC = ({ children }) => (
  <div className="max-w-md w-full p-5">{children}</div>
)
