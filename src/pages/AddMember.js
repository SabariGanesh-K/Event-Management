import { FormHelperText, Input,InputLabel } from '@mui/material';
import React ,{useContext, useState} from 'react'
import { Alert, Button, Snackbar, TextField } from '@mui/material'

import FormControl from '@mui/material/FormControl';
import { FireBaseContext } from '../context/AppContext';
export const AddMember = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Games, setGames] = useState(0)
    const [Pass, setPass] = useState("General")
    const {addmember} = useContext(FireBaseContext)
    const [EntityClipOpen, setEntityClipOpen] = useState(false);

    const [SelectedPass, setSelectedPass] = useState(0)
    const handleEntityClipClose = () =>{
      setEntityClipOpen(false);
  }
    const dat = {0:{games:4,cm:0},1:{games:3,cm:1},2:{games:2,cm:2}}
    const handleAdd = async() =>{
      await addmember(name,email,dat[SelectedPass].games,dat[SelectedPass].cm,SelectedPass.toString())

      console.log()
      setEmail("")
      setName("")
      setEntityClipOpen(true);


    }
  return (
    <div className='flex flex-row justify-center'>
    <div className=' w-[90%]  md:w-[90%] flex flex-col justify-center'>
    <a href="/home" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease"> &lt;=== Back to Admin Panel</span>
</a>
      <div className='text-3xl font-bold font-mono mt-6'>Add Participants</div>
      <Snackbar open={EntityClipOpen} autoHideDuration={3000} onClose={handleEntityClipClose}>
        <Alert className='bg-white' onClose={handleEntityClipClose} severity="success" sx={{ width: '100%' ,color:'white',bgcolor:'green'}}>
          USER ADDED SUCCESSFULLY !!
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
      

<div className='flex flex-row justify-center flex-wrap pt-8'>
<div   onClick={()=>setSelectedPass(0)}  class={`bg-white p-10  ml-2 rounded-lg shadow-md border border-2 ${ SelectedPass===0? `border-4 border-violet-600`:`border-gray-600`} cursor-pointer`}>
    <h1 class="text-xl font-bold">PASS 1</h1>
    <div class="mt-4 mb-10">
      <p class="text-gray-600"></p>
      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
        <div class={`${ SelectedPass===0? `bg-violet-600`:`bg-gray-600`}  h-full rounded-lg shadow-md`}></div>
      </div>
    </div>
    <h3 class="text-xs uppercase">Available:</h3>
    <h2 class="tracking-wide">
      4 Games
      <br />
    --
    </h2>
    <button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
  </div>

  <div onClick={()=>setSelectedPass(1)}  class={`bg-white p-10  ml-2 rounded-lg shadow-md border border-2 ${ SelectedPass===1? `border-violet-600 border-4`:`border-gray-600`} cursor-pointer`}>
    <h1 class="text-xl font-bold">PASS 2</h1>
    <div class="mt-4 mb-10">
      <p class="text-gray-600"></p>
      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
        <div class={`${ SelectedPass===1? `bg-violet-600`:`bg-gray-600`}  h-full rounded-lg shadow-md`}></div>
      </div>
    </div>
    <h3 class="text-xs uppercase">Available:</h3>
    <h2 class="tracking-wide">
      3 Games
      <br />
      1 Cosplay / Movie
    </h2>
    <button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
  </div>
  <div onClick={()=>setSelectedPass(2)} class={`bg-white p-10  ml-2 rounded-lg shadow-md border border-2 ${ SelectedPass===2? `border-violet-600 border-4`:`border-gray-600`} cursor-pointer`}>
    <h1 class="text-xl font-bold">PASS 3</h1>
    <div class="mt-4 mb-10">
      <p class="text-gray-600"></p>
      <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
        <div class={`${ SelectedPass===2? `bg-violet-600`:`bg-gray-600`}  h-full rounded-lg shadow-md`}></div>
      </div>
    </div>
    <h3 class="text-xs uppercase">Available:</h3>
    <h2 class="tracking-wide">
      2 Games
      <br />
      2 Cosplay /Movie
    </h2>
    <button class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">Go to lesson</button>
  </div>
  </div>
  <br/><br/>
{( name && email) ?
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span onClick={handleAdd} class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Add Member</span>
</a>
:
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-not-allowed border-2 font-medium border-gray-600 text-gray-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 "></span>
<span  class="relative text-gray-600 transition duration-300 ">Add Member</span>
</a>
}
    
    
    </div>
    

    
    </div>
  )
}
