//Vendors
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Stack, InputAdornment, Typography } from '@mui/material'
//import LoadingButton from '@mui/lab/LoadingButton'

import AccountCircle from '@mui/icons-material/AccountCircle'

//Types
import { User } from 'types/app'
import { login } from 'reducers/authSlice'

// Components
import { TextInput } from 'components'

// Utils
import { formHandlerErrorMenssage, errorMessages } from 'utils/form'

// Store
import { RootState } from 'store'

export const LoginForm = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state: RootState) => state.authReducer)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Pick<User, 'username'>>()

  const onSumbit = handleSubmit(({ username }) => {
    dispatch(login(username))
  })

  return (
    <form onSubmit={onSumbit} className="mt-4 py-4 ">
      <Stack spacing={4}>
        <TextInput
          label="Nombre de usuario"
          name="username"
          control={control}
          rules={{ required: true, minLength: 3, maxLength: 20 }}
          helperText={formHandlerErrorMenssage({
            messages: errorMessages,
            typeError: errors?.username?.type,
          })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        {/* <LoadingButton type="submit" variant="contained">
          Submit
        </LoadingButton> */}

        <Button type="submit" variant="contained">
          Iniciar Sesion
        </Button>
      </Stack>
      <div className="mt-4">
        <Typography align="center" variant="body2">
          ¿No tienes una cuenta? <Link to="/crear-cuenta">Regístrate</Link>
        </Typography>
      </div>
    </form>
  )
}
