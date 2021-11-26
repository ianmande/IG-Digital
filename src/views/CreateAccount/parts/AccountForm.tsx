//Vendors
import { useForm } from 'react-hook-form'
import { User } from 'types/app'
import { TextInput } from 'components'
import { Button } from '@mui/material'

export const AccountForm = () => {
  const { handleSubmit, control } = useForm<User>()
  const onSumbit = handleSubmit((data) => console.log(data))

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
