import React,{useContext, useState} from 'react'
import "./Styles.css";
import QrReader from "react-qr-reader";
import { FireBaseContext } from '../context/AppContext';
import { Alert, Button, Snackbar, TextField } from '@mui/material'

export const Admins = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const {scanGame,UserData,scanTeam,scanCosplay,NoGameBalanceError} = useContext(FireBaseContext)
  const [loadingGameDeduct, setloadingGameDeduct] = useState(false)
  const [EntityClipOpen, setEntityClipOpen] = useState(false);
  const [EntityClip2Open, setEntityClip2Open] = useState(false);

  const handleGameConfirm = async() =>{
    setloadingGameDeduct(true)
    await scanGame(data)
    if(NoGameBalanceError){
      setEntityClipOpen(true);
    }
    else{
      setData("")
      setEntityClip2Open(true);
    }

  }
  const handleTeamGameConfirm = async() =>{
    setloadingGameDeduct(true)
    await scanTeam(data)
    if(NoGameBalanceError){
      setEntityClipOpen(true);
    }
    else{
      setData("")
      setEntityClip2Open(true);
    }

  }
  const handleCMConfirm = async() =>{
    await scanCosplay(data)
  }
const handleScan = async (scanData) => {
  setLoadingScan(true);
  console.log(`loaded data data`, scanData);
  if (scanData && scanData !== "") {
    console.log(`loaded >>>`, scanData);
    setData(scanData);
    setStartScan(false);
    setLoadingScan(false);
    // setPrecScan(scanData);
  }
};

const handleEntityClipClose = () =>{
  setEntityClipOpen(false);
}

const handleEntityClip2Close = () =>{
  setEntityClip2Open(false);
}
const handleError = (err) => {
  console.error(err)
};
  return (
   <div className='ScanApp'>
        <div className='text-3xl font-bold font-mono mt-6'>Admin Panel</div>
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
        <br/><br/><br/><br/>
        <a href="/add" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span  class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">ADD MEMBER</span>
</a>
<br/><br/><br/><br/>
<a href="/addadmin" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span  class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">ADD Admin</span>
</a>
<br/><br/><br/><br/>
   <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span onClick={() => {
          setStartScan(!startScan);
        }} class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">        {startScan ? "Stop Scan" : "Start Scan"}</span>
</a>

 
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
          <div>scanning</div>
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data!="" && <p>{data}</p> }
      {data !== "" && UserData.games!=0 &&    <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span onClick={handleGameConfirm} class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Enroll Game</span>
</a>}
{data !== "" && UserData.games!=0 &&    <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span onClick={handleTeamGameConfirm} class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Enroll Team</span>
</a>}
      {data !== "" && UserData.games==0 &&   <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-not-allowed border-2 font-medium border-gray-600 text-gray-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-600 top-1/2 "></span>
<span  class="relative text-gray-600 transition duration-300 ">No games Available</span>
</a>}
<br/><br/><br/><br/>
<a href="/enroll" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span  class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">ENROLL / SCAN manually</span>
</a>

      </div>
    
  );

   
  
      
}
