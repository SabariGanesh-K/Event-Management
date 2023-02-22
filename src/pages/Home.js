import React, { useContext } from 'react'
import { FireBaseContext } from '../context/AppContext'
import { Admins } from './Admins'

export const Home = () => {
    const {loggedIn,signInWithGoogle,UserData} =useContext(FireBaseContext)
  return (
    <div>


{!loggedIn && <button onClick={signInWithGoogle}>Sign in</button>}
{loggedIn &&  <div>in </div> }
{ UserData?.admin &&    <Admins/>  }

    </div>
  )
}
