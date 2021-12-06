// Vendros
import React, { useState, useCallback } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore'

// Store
import { removedPosts, restorePosts } from 'reducers/postSlice'

// Types
import { ViewPost } from 'types/app'

export const PostAction = (props: ViewPost) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const handleClickMenuItem = useCallback(() => {
    if (props.status === 'published') {
      dispatch(removedPosts(props))
    } else if (props.status === 'deleted') {
      dispatch(restorePosts(props))
    }
    handleClose()
  }, [dispatch, handleClose, props])

  return (
    <>
      <IconButton
        id="button-action"
        aria-label="settings"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon className="text-white" />
      </IconButton>
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
        <MenuItem onClick={handleClickMenuItem}>
          {props.status === 'published' ? (
            <>
              <DeleteIcon /> Borrar
            </>
          ) : (
            <>
              <SettingsBackupRestoreIcon /> Restaurar
            </>
          )}
        </MenuItem>
      </Menu>
    </>
  )
}
