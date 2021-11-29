// Components
import { IconAdd } from 'components/image/IconAdd'
import { NewPostForm } from 'components/posts/NewPostForm'

// Hooks
import { useModal } from 'hooks/useModal'

export const AddPosts = () => {
  const { modalOpen } = useModal()

  return (
    <div
      className="my-auto h-full mx-2 cursor-pointer"
      onClick={() => modalOpen(<NewPostForm />)}
    >
      <IconAdd />
    </div>
  )
}
