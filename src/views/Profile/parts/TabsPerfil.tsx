//Vendors
import { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

interface TabsPerfileProps {
  readonly status: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

export default function TabsPerfile({ status, setStatus }: TabsPerfileProps) {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setStatus(() => (value === 1 ? 'published' : 'deleted'))
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }} className="my-5 bg-black-light rounded-xl">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Publicados" sx={{ color: 'white' }} />
        <Tab label="Eliminados" sx={{ color: 'white' }} />
      </Tabs>
    </Box>
  )
}
