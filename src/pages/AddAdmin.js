import { FormHelperText, Input,InputLabel } from '@mui/material';
import React ,{useContext, useState} from 'react'
import { Alert, Button, Snackbar, TextField } from '@mui/material'

import FormControl from '@mui/material/FormControl';
import { FireBaseContext } from '../context/AppContext';
export const AddAdmin = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Games, setGames] = useState(0)
    const [Pass, setPass] = useState("General")
    const {addmember,addAdmin} = useContext(FireBaseContext)
    const [EntityClipOpen, setEntityClipOpen] = useState(false);
const [AddLoading, setAddLoading] = useState(false)
    const [SelectedPass, setSelectedPass] = useState(0)
    const handleEntityClipClose = () =>{
      setEntityClipOpen(false);
  }
    const handleAdd = async() =>{
      // alert("yes")
      setAddLoading(true)
      await addAdmin(name,email)

      console.log()
      setEmail("")
      setName("")
      setEntityClipOpen(true);

setAddLoading(false)
    }
  return (
    <div className='flex flex-row justify-center'>
    <div className='w-[90%]  md:w-[90%] flex flex-col justify-center'>
    <a href="/home" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease"> &lt;=== Back to Admin Panel</span>
</a>
      <div className='text-3xl  font-bold font-mono mt-6'>Add Admin (Make sure account not a part of participants)</div>
      <Snackbar open={EntityClipOpen} autoHideDuration={3000} onClose={handleEntityClipClose}>
        <Alert className='bg-white' onClose={handleEntityClipClose} severity="success" sx={{ width: '100%' ,color:'white',bgcolor:'green'}}>
          Admin ADDED SUCCESSFULLY !!
        </Alert>
      </Snackbar>
<br/><br/>
<TextField
          id="standard-textarea"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          label=" Name"
          placeholder="name"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          label=" email "
          placeholder="email"
          multiline
          variant="standard"
        />
      

  <br/><br/>
{!AddLoading ?( name && email)?
  <a onClick={handleAdd} href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span onClick={handleAdd} class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span onClick={handleAdd} class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Add Member</span>
</a>
:
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-not-allowed border-2 font-medium border-gray-600 text-gray-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 "></span>
<span  class="relative text-gray-600 transition duration-300 ">Add Member</span>
</a>

:  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-not-allowed border-2 font-medium border-gray-600 text-gray-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 "></span>
<span  class="relative text-gray-600 transition duration-300 ">Adding...</span>
</a> }
    
    
    </div>
    

    
    </div>
  )
}
