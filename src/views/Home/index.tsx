// Vendors
import { Container, Stack } from '@mui/material'
import { useSelector } from 'react-redux'

// Components
import { Posts } from 'components'

//Store
import { RootState } from 'store'

export const Home: React.FC = () => {
  const { posts, isLoading } = useSelector(
    (state: RootState) => state.postReducer
  )

  return (
    <section id="home" className="mt-24">
      <Container maxWidth="sm">
        <Stack spacing={3}>
          <Posts posts={posts} isLoading={isLoading} />
        </Stack>
      </Container>
    </section>
  )
}
