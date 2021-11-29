// Vendors
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Container, Stack, Typography } from '@mui/material'
import { Posts } from 'components'

// Components
import { UserAvatar } from 'components/image/Avatar'

// store
import { RootState } from 'store'
import { upperFirst } from 'utils/text'
import { height } from '@mui/system'

export const Profile = () => {
  const { username } = useParams<{ username: string }>()
  const { users } = useSelector((state: RootState) => state.userReducer)
  const { posts, isLoading } = useSelector(
    (state: RootState) => state.postReducer
  )

  const user = users.find((user) => user.username === username)
  const postsByUser = posts.filter(({ author }) => author.username === username)

  return (
    <Container maxWidth="sm">
      <div className="px-9 py-6 mb-12 bg-black-light mx-auto h-full max-h-96 rounded-b-3xl overflow-hidden mt-14">
        <div className="w-full max-w-md text-center grid justify-items-center mx-auto gap-3">
          <div>
            <UserAvatar
              avatar={user?.avatar}
              styles={{
                width: '120px',
                height: '120px',
              }}
            />
          </div>
          <Typography variant="h5">
            {user && `${upperFirst(user?.name)} ${upperFirst(user?.surname)}`}
          </Typography>
          <Typography variant="h6">
            {postsByUser.length}
            <Typography variant="body1" className="text-gray">
              Publicaciones
            </Typography>
          </Typography>
        </div>
      </div>
      <Stack spacing={3}>
        <Posts posts={postsByUser} isLoading={isLoading} />
      </Stack>
    </Container>
  )
}
