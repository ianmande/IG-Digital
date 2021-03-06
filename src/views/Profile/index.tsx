// Vendors
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Container, Stack, Typography } from '@mui/material'
import { Posts } from 'components'

// Components
import { UserAvatar } from 'components/image/Avatar'
import TabsPerfile from './parts/TabsPerfil'

// store
import { RootState } from 'store'
import { upperFirst } from 'utils/text'

export const Profile = () => {
  const [statusTab, setStatusTab] = useState('published')

  const { username } = useParams<{ username: string }>()
  const { users } = useSelector((state: RootState) => state.userReducer)
  const { posts } = useSelector((state: RootState) => state.postReducer)

  const user = users.find((user) => user.username === username)
  const postsByUser = posts.filter(({ author }) => author.username === username)

  const postByStatus = postsByUser.filter(({ status }) => status === statusTab)

  useEffect(() => {
    console.log('statusTab', postByStatus)
  }, [postByStatus])
  return (
    <Container maxWidth="sm">
      <div className="px-9 py-6 bg-black-light mx-auto h-full max-h-96 rounded-b-3xl overflow-hidden mt-14">
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
      <TabsPerfile status={statusTab} setStatus={setStatusTab} />
      <Stack spacing={3}>
        {postByStatus.length ? (
          <Posts posts={postByStatus} isLoading={postByStatus ? false : true} />
        ) : (
          'No hay resultados'
        )}
      </Stack>
    </Container>
  )
}
