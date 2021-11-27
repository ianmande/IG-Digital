//Vendors
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'

//Types
import { User } from 'types/app'
import { RootState } from 'store'
import { login } from 'reducers/authSlice'

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
        <Controller
          name={'username'}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
        <Button type="submit">Iniciar Sesion</Button>
      </form>
    </section>
  )
}
