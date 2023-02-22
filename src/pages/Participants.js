import React, { useContext } from 'react'
import { FireBaseContext } from '../context/AppContext'

export const Participants = () => {
  const {UserData} = useContext(FireBaseContext)
  return (
    <div>you have {UserData.games} games </div>
  )
}
