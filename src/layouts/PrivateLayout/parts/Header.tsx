//Vendors
import { useSelector } from 'react-redux'
import { AppBar, Typography, Toolbar, Stack } from '@mui/material'
import { Box } from '@mui/system'

// Components
import { AppLogo } from 'components'
import { UserAvatar } from 'components/image/Avatar'
import { Searcher } from './Search'

// Hooks
import { useMobile } from 'hooks/useMobile'

// Store
import { RootState } from 'store'

export const Header = () => {
  const { avatar } = useSelector((state: RootState) => state.authReducer.user)
  const isMobile = useMobile()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <AppLogo />
          </Typography>
          <Stack direction="row" spacing={3}>
            {!isMobile && <Searcher />}
            <UserAvatar avatar={avatar} />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
