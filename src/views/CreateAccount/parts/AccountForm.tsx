//Vendors
import { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography } from '@mui/material'

// Components
import { TextInput } from 'components'

// Types
import { User } from 'types/app'

// Store
import { RootState } from 'store'
import { createAccount } from 'reducers/userSlice'

// Utils
import { formHandlerErrorMenssage, errorMessages } from 'utils/form'

// Hooks
import { useToast } from 'hooks/useToast'
import { clearErrors } from 'reducers/authSlice'

export const AccountForm = () => {
  const dispatch = useDispatch()
  const { success, serverErrors } = useSelector(
    (state: RootState) => state.userReducer
  )
  const { push } = useHistory()

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<User>()

  const { Toast, openToast } = useToast()

  const onSumbit = handleSubmit((data) => {
    dispatch(createAccount(data))
  })

  const username = watch('username')

  const createdSuccess = useCallback(() => {
    dispatch(clearErrors())
    push('iniciar-sesion')
  }, [push, dispatch])

  useEffect(() => {
    if (success) {
      openToast({
        message: 'Cuenta creada exitosamente inicie sesión',
        severity: 'success',
        onCloseCallback: createdSuccess,
      })
    }
  }, [success, openToast, createdSuccess])

  useEffect(() => {
    if (serverErrors) {
      openToast({
        message: `Lo sentimos pero el nombre de usuario "${username}" no esta disponible`,
        severity: 'error',
        onCloseCallback: () => dispatch(clearErrors()),
      })
    }
  }, [username, openToast, serverErrors, dispatch])

  return (
    <form onSubmit={onSumbit}>
      {Toast}
      <Stack spacing={2}>
        <TextInput
          name="name"
          label="Nombre"
          control={control}
          rules={{ required: true }}
          helperText={formHandlerErrorMenssage({
            messages: errorMessages,
            typeError: errors?.name?.type,
          })}
        />
        <TextInput
          name="surname"
          label="Apellido"
          control={control}
          rules={{ required: true }}
          helperText={formHandlerErrorMenssage({
            messages: errorMessages,
            typeError: errors?.surname?.type,
          })}
        />
        <TextInput
          name="username"
          label="Nombre de usuario"
          control={control}
          rules={{ required: true }}
          helperText={formHandlerErrorMenssage({
            messages: errorMessages,
            typeError: errors?.username?.type,
          })}
        />
        <TextInput name="avatar" label="Avatar" control={control} />
        <Button type="submit" variant="contained">
          Crear Cuenta
        </Button>
        <Typography variant="body2" align="center">
          ¿Ya tienes una cuenta?{' '}
          <Link to="/iniciar-sesion">Iniciar Sesión</Link>
        </Typography>
      </Stack>
    </form>
  )
}
