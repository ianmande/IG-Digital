// Components
import { AuthContainer } from 'components/containers/AuthContainer'
import { LoginForm } from './parts/LoginForm'
import { Image } from 'components/Image'

// Statics
import brandLogin from 'assets/images/social_bio.svg'

export const Login: React.FC = () => {
  return (
    <AuthContainer brandLogin={<Image source={brandLogin} alt="" />}>
      <LoginForm />
    </AuthContainer>
  )
}
