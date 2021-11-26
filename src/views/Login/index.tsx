// Components
import { AuthContainer } from 'components/containers/AuthContainer'
import { LoginForm } from './parts/LoginForm'

// Statics
import brandLogin from 'assets/images/social_bio.svg'
import { Image } from 'components/Image'

export const Login: React.FC = () => {
  return (
    <AuthContainer brandLogin={<Image source={brandLogin} alt="" />}>
      <LoginForm />
    </AuthContainer>
  )
}
