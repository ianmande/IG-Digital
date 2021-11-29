// Vendors
import { Link } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, MenuItem } from '@mui/material'

// Store
import { fetchAuthLogout } from 'reducers/authSlice'
import { RootState } from 'store'

// Components
import { UserAvatar } from 'components/image/Avatar'

export const UserActive = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)

  const dispatch = useDispatch()

  const { user } = useSelector((state: RootState) => state.authReducer)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const logout = useCallback(() => {
    dispatch(fetchAuthLogout())
  }, [dispatch])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <div className="m-0 p-0 h-10">
      <button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <UserAvatar avatar={user.avatar} alt={`${user.name} ${user.surname}`} />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          className: 'bg-black-light text-white',
        }}
      >
        <MenuItem>
          <Link
            to={`user/${user.username}`}
            className="text-white hover:text-pink"
          >
            Perfil
          </Link>
        </MenuItem>
        <MenuItem onClick={logout} className="text-white hover:text-pink">
          Cerrar Sesisón
        </MenuItem>
      </Menu>
    </div>
  )
}
