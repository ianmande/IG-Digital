//Vendors
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Stack, Button, Typography } from '@mui/material'

// Components
import { TextInput } from 'components'

// Types
import { User } from 'types/app'

// Store
import { createAccount } from 'reducers/userSlice'

// Utils
import { formHandlerErrorMenssage, errorMessages } from 'utils/form'

export const AccountForm = () => {
  const dispatch = useDispatch()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>()

  const onSumbit = handleSubmit((data) => {
    dispatch(createAccount(data))
  })

  return (
    <form onSubmit={onSumbit}>
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
