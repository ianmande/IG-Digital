//Vendors
import { Controller, useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { User } from 'types/app'

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<Pick<User, 'username'>>()
  const onSumbit = handleSubmit((data) => console.log(data))

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
              value={value}
            />
          )}
        />
      </form>
    </section>
  )
}
