// Vendors

// Components
import { PostPublic } from 'components'
import { Stack } from '@mui/material'

// Type
import { Post } from 'types/app'

interface PostsProps {
  isLoading: boolean
  posts: Post[]
}

export function Posts({ isLoading, posts }: PostsProps) {
  return (
    <Stack spacing={3}>
      {!isLoading && posts
        ? posts.map(({ author, create_at, image, message, status }, key) => (
            <PostPublic
              author={author}
              create_at={create_at}
              message={message}
              image={image}
              status={status}
              key={`${key}-${author?.name}`}
            />
          ))
        : 'cargando'}
    </Stack>
  )
}
