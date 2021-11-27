//Vendors
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

// Components
import { TextInput } from 'components'

// Types
import { User } from 'types/app'

// Store
import { createAccount } from 'reducers/userSlice'

export const AccountForm = () => {
  const dispatch = useDispatch()

  const { handleSubmit, control } = useForm<User>()
  const onSumbit = handleSubmit((data) => {
    console.log('new Account', data)
    dispatch(createAccount(data))
  })

  return (
    <section>
      <h1 className="font-bold font-lato">Crear Cuenta</h1>
      <form onSubmit={onSumbit}>
        <TextInput name="name" label="Nombre" control={control} />
        <TextInput name="surname" label="Apellido" control={control} />
        <TextInput
          name="username"
          label="Nombre de usuario"
          control={control}
        />
        <TextInput name="avatar" label="Avatar" control={control} />

        <Button type="submit">Crear Cuenta</Button>
      </form>
    </section>
  )
}
