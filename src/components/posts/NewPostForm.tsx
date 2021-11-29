//Vendors
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Stack, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

//Types
import { Post } from 'types/app'

// Components
import { TextInput } from 'components'

// Utils
import {
  formHandlerErrorMenssage,
  errorMessages,
  errorMessagesPosts,
} from 'utils/form'

// Store
import { clearServer, createPost } from 'reducers/postSlice'
import { RootState } from 'store'

// Hooks
import { useToast } from 'hooks/useToast'
import { useModal } from 'hooks/useModal'

export const NewPostForm = () => {
  const dispatch = useDispatch()
  const { success } = useSelector((state: RootState) => state.postReducer)

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Post>()

  const { modalClose } = useModal()
  const { Toast, openToast } = useToast()

  const onSumbit = handleSubmit((data) => {
    dispatch(createPost(data))
  })

  useEffect(() => {
    if (success)
      openToast({
        message: 'Nuevo post creado con exito!',
        severity: 'success',
        onCloseCallback: () => {
          dispatch(clearServer())
          modalClose()
        },
      })
  }, [success, openToast, dispatch, modalClose])

  return (
    <div className="grid gap-10">
      {Toast}
      <Typography
        align="center"
        className="font-bold font-lato"
        variant="h4"
        color="secondary"
      >
        Compartir una nueva idea
      </Typography>
      <form onSubmit={onSumbit} className="py-4 text-white">
        <Stack spacing={4}>
          <TextInput control={control} name="image" label="Imagen" />
          <TextInput
            control={control}
            name="message"
            label="Mensaje"
            rules={{ required: true, minLength: 10, maxLength: 300 }}
            helperText={formHandlerErrorMenssage({
              messages: errorMessagesPosts,
              typeError: errors?.message?.type,
            })}
            multiline
          />
          <TextInput
            control={control}
            name="location"
            label="Localización"
            rules={{ required: true }}
            helperText={formHandlerErrorMenssage({
              messages: errorMessages,
              typeError: errors?.location?.type,
            })}
          />

          <LoadingButton
            type="submit"
            variant="contained"
            className="text-white"
            size="large"
          >
            Crear nuevo posts
          </LoadingButton>
        </Stack>
      </form>
    </div>
  )
}
