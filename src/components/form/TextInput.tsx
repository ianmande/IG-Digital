import { TextField } from '@mui/material'
import {
  Controller,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form'

interface TextInputProps<T> extends UseControllerProps<T> {
  label: string
}

export const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
  const { field } = useController<T>(props)

  return (
    <Controller
      name={field.name}
      control={props.control}
      render={({ field: { onChange, value } }) => (
        <TextField
          label={props.label}
          variant="outlined"
          onChange={onChange}
          value={value}
        />
      )}
    />
  )
}
