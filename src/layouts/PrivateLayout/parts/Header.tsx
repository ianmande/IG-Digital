//Vendors
import { AppBar, Typography, Toolbar, Stack } from '@mui/material'
import { Box } from '@mui/system'

// Components
import { AppLogo } from 'components'
import { UserAvatar } from 'components/image/Avatar'
import { Searcher } from './Search'

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <AppLogo />
          </Typography>
          <Stack direction="row" spacing={3}>
            <Searcher />
            <UserAvatar />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
