// Vendors
import { Container, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

// Components
import { Posts, Searcher } from 'components'

//Store
import { RootState } from 'store'
import { useMobile } from 'hooks/useMobile'

export const Home: React.FC = () => {
  const isMobile = useMobile()
  const { posts, isLoading } = useSelector(
    (state: RootState) => state.postReducer
  )

  return (
    <section id="home" className="mt-24">
      <Container maxWidth="sm">
        <>
          {isMobile ? (
            <div className="flex justify-between mb-4 gap-2">
              <Typography variant="h4">Explorar</Typography>
              <Searcher />
            </div>
          ) : (
            ''
          )}
          <Stack spacing={3}>
            <Posts posts={posts} isLoading={isLoading} />
          </Stack>
        </>
      </Container>
    </section>
  )
}
