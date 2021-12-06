// Vendors
import { CardHeader } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

// Components
import { Like } from './Like'
import { UserAvatar } from 'components/image/Avatar'
import { PostAction } from './PostAction'

// Hooks
import useTimeAgo from 'hooks/useTimago'

// Type
import { Post } from 'types/app'
import { upperFirst } from 'utils/text'
import { Link } from 'react-router-dom'

type PostProps = Pick<
  Post,
  'image' | 'author' | 'message' | 'create_at' | 'status'
>

function PostPublic({ image, author, create_at, message, status }: PostProps) {
  const timago = useTimeAgo(new Date(create_at).getTime())

  const authorName = `${upperFirst(author.name)} ${upperFirst(author.surname)}`

  return (
    <div className="card">
      <CardHeader
        avatar={
          <Link to={`/user/${author.username}`}>
            <UserAvatar avatar={author.avatar} alt={authorName} />
          </Link>
        }
        title={authorName}
        subheader={timago}
        action={
          <PostAction
            image={image}
            author={author}
            create_at={create_at}
            message={message}
            status={status}
          />
        }
        titleTypographyProps={{
          variant: 'subtitle1',
          sx: { fontWeight: 'bold' },
        }}
        subheaderTypographyProps={{ color: '', className: 'text-gray' }}
      />
      <div className="relative px-2">
        <CardMedia
          component="img"
          image={image || 'https://loremflickr.com/600/600'}
          alt="green iguana"
          className="h-full rounded-xl"
          sx={{ maxHeight: { xs: 320 } }}
        />
        <Like
          author={author}
          create_at={create_at}
          message={message}
          image={image}
          status={status}
        />
      </div>

      <CardContent>
        <Typography variant="body1" className="text-gray">
          {message || ''}
        </Typography>
      </CardContent>
      {/* <CardActions></CardActions> */}
    </div>
  )
}

export default PostPublic
