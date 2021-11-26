//Components
import { AuthContainer, Image } from 'components'
import { AccountForm } from './parts/AccountForm'

// Statics
import brandLogin from 'assets/images/add_friends.svg'

export const CreateAccount = () => {
  return (
    <AuthContainer branCreate={<Image source={brandLogin} alt="" />}>
      <AccountForm />
    </AuthContainer>
  )
}
