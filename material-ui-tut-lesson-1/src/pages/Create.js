import { Typography , Button, TextField, FormControlLabel} from '@mui/material'
import { Container } from '@mui/system'
import classes from '../index.css'

import { styled } from '@mui/system';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react'
import { RadioGroup,Radio } from '@mui/material';

export default function Create() {

  const [username, setName]=useState('')
  const [details,setDetails]=useState('')
  const[nameError,setNameError]=useState(false)

  const[detailError,setDetailError]=useState(false)

  const [category, setCategory]=useState('todos')
  // const func=(e)=>{
  //   e.preventDefault()
  //   setName(e.taget.value)
  //   console.log(username)
  // }

const submitHandlerrrrr=(e)=>{
  e.preventDefault()

  setDetailError(false)
  setNameError(false)

  if(username==='')
  setNameError(true)

  if(details==='')
  setDetailError(true)



  console.log(username+" posted "+details, category)
}
  return (
    <Container>
      <Typography variant='h6' component='h2' color='textSecondary' gutterBottom> Create a new note</Typography>

      <form action='' noValidate autoComplete='off' onSubmit={submitHandlerrrrr} >
        <TextField  type='text' label='Note title' sx={{marginBottom:'30px'}} error={nameError} color='secondary' value={username} onChange={(e)=>setName(e.target.value)} required fullWidth variant='standard' ></TextField>
        <TextField multiline   value={details} onChange={e=>setDetails(e.target.value)} error={detailError} label='details' sx={{marginBottom:'30px'}} rows='4'  color='secondary'   required fullWidth variant='standard'></TextField>
     
        <RadioGroup value={category} onChange={e=>setCategory(e.target.value)}>
        <FormControlLabel control={<Radio value="todos"/>} label="todos" color="primary" />
          <FormControlLabel control={<Radio value="Money"/>} label="Money"  color="primary"/>
          <FormControlLabel control={<Radio value="Work"/>} label="Work" color="primary" />
    </RadioGroup>
        <Button variant="contained" type='submit'  color='secondary' endIcon={<ChevronRightIcon/>} >Submit </Button>
         </form>

         
     
     
    </Container>
  )
}
