//Vendors
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

export const Searcher = () => {
  return (
    <div className="search">
      <div className="search-icon-wrapper">
        <SearchIcon />
      </div>
      <StyledInputBase
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
