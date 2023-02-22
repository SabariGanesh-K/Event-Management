import React, { useContext } from 'react'
import { FireBaseContext } from '../context/AppContext'
import { Admins } from './Admins'
import { Participants } from './Participants'

export const Home = () => {
    const {loggedIn,signInWithGoogle,UserData} =useContext(FireBaseContext)
  return (
    <div>


{!loggedIn && <button onClick={signInWithGoogle}>Sign in</button>}
{loggedIn &&  <div>in </div> }
{loggedIn&& UserData?.admin &&    <Admins/>  }
{ loggedIn&& !UserData?.admin &&  <Participants/> }

    </div>
  )
}
