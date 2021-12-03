//Vendors
import { AppBar, Typography, Toolbar, Stack } from '@mui/material'
import { Box } from '@mui/system'

// Components
import { AddPosts } from './AddPosts'
import { AppLogo, Searcher } from 'components'
import { UserActive } from './UserActive'

// Hooks
import { useMobile } from 'hooks/useMobile'

export const Header = () => {
  const isMobile = useMobile()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary" className="top-0">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <AppLogo />
          </Typography>
          <Stack direction="row" spacing={0} className="gap-4">
            {!isMobile && <Searcher />}
            <AddPosts />
            <UserActive />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
