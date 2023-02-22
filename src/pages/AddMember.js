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
    const handleAdd = async() =>{
      await addmember(name,email,Games,Pass)
    }
  return (
    <div className='flex flex-col justify-center'>
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
        <TextField
          id="standard-textarea"
          value={Games}
          onChange={(e)=>setGames(e.target.value)}
          label=" games"
          placeholder="games"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          value={Pass}
          onChange={(e)=>setPass(e.target.value)}
          label=" Pass"
          placeholder="pass"
          multiline
          variant="standard"
        />
        <Button onClick={handleAdd}>Add memeber</Button>
    </div>
  )
}
