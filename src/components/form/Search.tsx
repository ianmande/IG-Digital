//Vendors
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router'

export const Searcher = () => {
  const { push } = useHistory()
  const { control, handleSubmit } = useForm<{ textSearch: string }>()

  const onSubimt = handleSubmit(({ textSearch }) =>
    push(`/buscar/${textSearch}`)
  )

  return (
    <div className="search">
      <div className="search-icon-wrapper">
        <SearchIcon />
      </div>
      <form onSubmit={onSubimt}>
        <Controller
          name="textSearch"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <StyledInputBase
              placeholder="Buscar"
              onChange={onChange}
              value={value || ''}
              inputProps={{
                'aria-label': 'search',
              }}
            />
          )}
        />
      </form>
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
