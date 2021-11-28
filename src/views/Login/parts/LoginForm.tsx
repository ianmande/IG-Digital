//Vendors
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'

//Types
import { User } from 'types/app'
import { RootState } from 'store'
import { login } from 'reducers/authSlice'
import { TextInput } from 'components'

export const LoginForm = () => {
  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authReducer
  )
  const { handleSubmit, control } = useForm<Pick<User, 'username'>>()

  const onSumbit = handleSubmit(({ username }) => {
    dispatch(login(username))
  })

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated)
  }, [isAuthenticated])
  return (
    <section>
      <h1 className="font-bold font-lato">IG DIGITAL</h1>
      <form onSubmit={onSumbit}>
        <TextInput
          label="Nombre de usuario"
          name="username"
          control={control}
        />

        <Button type="submit">Iniciar Sesion</Button>
      </form>
    </section>
  )
}
