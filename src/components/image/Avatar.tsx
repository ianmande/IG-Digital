import { Avatar } from '@mui/material'

import notAvatar from 'assets/images/image_broken.svg'

interface UserAvatarProps {
  avatar?: string
}

export const UserAvatar = ({ avatar }: UserAvatarProps) => {
  return <Avatar alt="Remy Sharp" src={avatar || notAvatar} />
}
