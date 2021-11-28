// Vendors
import { ReactElement } from 'react'
import { Container, Paper, Typography, Grow } from '@mui/material'

// Components
import { AppLogo, Copyright } from 'components'

interface AuthContainerProps {
  brandLogin?: ReactElement<any, any> | React.ReactNode
  branCreate?: ReactElement<any, any> | React.ReactNode
  title: string
}

export const AuthContainer: React.FC<AuthContainerProps> = ({
  brandLogin,
  branCreate,
  children,
  title,
}) => {
  return (
    <div className="auth-container">
      <div className="mx-auto p-4">
        <AppLogo className="max-w-sm" />
      </div>
      <Container>
        <div className="mx-auto max-w-4xl grid grid-cols-2 justify-items-center align-center rounded-md border-white bg-black-light overflow-hidden">
          {brandLogin && <BrandWrapper>{brandLogin}</BrandWrapper>}
          <Paper className="bg-black-light p-5 w-full" elevation={3}>
            <section className="grid gap-6 h-full">
              <Typography
                align="center"
                className="font-bold font-lato"
                variant="h4"
              >
                {title}
              </Typography>
              {children}
            </section>
          </Paper>
          {branCreate && <BrandWrapper>{branCreate}</BrandWrapper>}
        </div>
      </Container>
      <Copyright />
    </div>
  )
}

const BrandWrapper: React.FC = ({ children }) => (
  <Grow in timeout={1200} style={{ transformOrigin: '0 0 0' }}>
    <div className="auth-brand">{children}</div>
  </Grow>
)
