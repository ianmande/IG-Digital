import { Avatar } from '@mui/material'

import notAvatar from 'assets/images/image_broken.svg'

interface UserAvatarProps {
  avatar: string | undefined
  alt?: string
  styles?: {}
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  avatar,
  children,
  alt = '',
  styles,
}) => {
  return (
    <Avatar alt={alt} src={avatar || notAvatar} sx={styles}>
      {children}
    </Avatar>
  )
}
