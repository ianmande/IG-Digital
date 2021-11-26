//Vendors
import { useForm } from 'react-hook-form'
import { User } from 'types/app'
import { TextInput } from 'components'

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
      </form>
    </section>
  )
}
