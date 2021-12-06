// Vendros
import React, { useState, useCallback } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'

// Store
import { removedPosts } from 'reducers/postSlice'

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
        <MenuItem onClick={() => dispatch(removedPosts(props))}>
          <DeleteIcon /> Borrar
        </MenuItem>
      </Menu>
    </>
  )
}
