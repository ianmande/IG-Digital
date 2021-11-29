// Vendors
import { CardHeader, IconButton } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// Components
import { Like } from './Like'
import { UserAvatar } from 'components/image/Avatar'

// Hooks
import useTimeAgo from 'hooks/useTimago'

// Type
import { Post } from 'types/app'
import { upperFirst } from 'utils/text'
import { Link } from 'react-router-dom'

type PostProps = Pick<Post, 'image' | 'author' | 'message' | 'create_at'>

function PostPublic({ image, author, create_at, message }: PostProps) {
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
          <IconButton aria-label="settings">
            <MoreVertIcon className="text-white" />
          </IconButton>
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
        />
      </div>

      <CardContent>
        <Typography variant="body1" className="text-gray">
          {message ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolor, amet sint laborum voluptate iure incidunt optio! Consequatur quibusdam, enim nesciunt nihil nemo, sint ad, fuga tempore adipisci molestias perferendis.'}
        </Typography>
      </CardContent>
      {/* <CardActions></CardActions> */}
    </div>
  )
}

export default PostPublic
