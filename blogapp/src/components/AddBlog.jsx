import { Typography,TextField,Button } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div>
         <Typography variant='h1'>AddBlog</Typography>
        <br /><br />
        <TextField variant='outlined' label="Blog name"/>
        <br /><br />
        <TextField variant='outlined' label="Description"/>
        <br /><br />
        <TextField variant='outlined' label="Author name"/>
        <br /><br />
        <Button variant='contained' >submit</Button><br />
    </div>
  )
}

export default AddBlog
