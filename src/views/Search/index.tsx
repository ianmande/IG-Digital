//Vendors
import { Stack, Typography, Container } from '@mui/material'
import { Posts } from 'components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// Store
import { RootState } from 'store'
import { Post } from 'types/app'

// Utils
import { searchPosts } from 'utils/array'

export const Search = () => {
  const [postsFound, setPostsFound] = useState<Post[]>([])
  const { textSearch } = useParams<{ textSearch: string }>()
  const { posts, isLoading } = useSelector(
    (state: RootState) => state.postReducer
  )

  useEffect(() => {
    const foundPosts = searchPosts(textSearch, posts)
    setPostsFound(foundPosts)
  }, [textSearch, posts])

  return (
    <div className="mt-24">
      <Container maxWidth="sm">
        <div className="mb-4">
          <Typography variant="h4">Resultados para: {textSearch}</Typography>
        </div>

        <Stack spacing={3}>
          <Posts posts={postsFound} isLoading={isLoading} />
        </Stack>
      </Container>
    </div>
  )
}
