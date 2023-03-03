import React,{useContext, useState} from 'react'

import { Alert, Button, Snackbar, TextField } from '@mui/material'
import { FireBaseContext } from '../context/AppContext';

export const EnrollManually = () => {
  const {scanGame,UserData,scanCosplay,NoGameBalanceError,scanTeam} = useContext(FireBaseContext)

    const [email, setEmail] = useState("")
  const [loadingGameDeduct, setloadingGameDeduct] = useState(false)
  const [EntityClipOpen, setEntityClipOpen] = useState(false);
  const [EntityClip2Open, setEntityClip2Open] = useState(false);
  const [ss, setss] = useState(false)
    const handleGameConfirm = async() =>{
        setloadingGameDeduct(true)
       let stats =  await scanGame(email)
       setss(stats)
        if(!ss ){
        //   setEntityClipOpen(true);
        }
        else{
          setEmail("")
        //   setEntityClip2Open(true);
        }
        setloadingGameDeduct(false)
      }
      const handleEntityClipClose = () =>{
        setEntityClipOpen(false);
      }
      
      const handleEntityClip2Close = () =>{
        setEntityClip2Open(false);
      }
      const handleTeamGameConfirm = async() =>{
        setloadingGameDeduct(true)
        await scanTeam(email)
        if(NoGameBalanceError){
          setEntityClipOpen(true);
        }
        else{
          setEmail("")
          setEntityClip2Open(true);
        }
    
      }
  return (
    <div>
<a href="/home" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease"> &lt;=== Back to Admin Panel</span>
</a>
<div className='text-3xl  font-bold font-mono mt-6'>Enroll/Scan Manually</div>
<br/><br/><br/>
<Snackbar open={EntityClipOpen} autoHideDuration={3000} onClose={handleEntityClipClose}>
        <Alert className='bg-white' onClose={handleEntityClipClose} severity="error" sx={{ width: '100%' ,color:'black',bgcolor:'red'}}>
          No Balance !!
        </Alert>
      </Snackbar>
      <Snackbar open={EntityClip2Open} autoHideDuration={3000} onClose={handleEntityClip2Close}>
        <Alert className='bg-white' onClose={handleEntityClip2Close} severity="success" sx={{ width: '100%' ,color:'white',bgcolor:'green'}}>
         Donee !!
        </Alert>
      </Snackbar>
<TextField
className='w-[92%]'
          id="standard-textarea"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          label=" email "
          placeholder="email"
          multiline
          variant="standard"
        />
<br/><br/><br/>

{( email) ?
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span onClick={handleGameConfirm} class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Enroll /Scan member</span>
</a>
:
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-not-allowed border-2 font-medium border-gray-600 text-gray-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 "></span>
<span  class="relative text-gray-600 transition duration-300 ">Enroll /Scan member</span>
</a>
}
{( email) ?
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span onClick={handleTeamGameConfirm} class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Enroll /Scan Team</span>
</a>
:
  <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-not-allowed border-2 font-medium border-gray-600 text-gray-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 "></span>
<span  class="relative text-gray-600 transition duration-300 ">Enroll /Scan Team</span>
</a>
}
    </div>
  )
}
