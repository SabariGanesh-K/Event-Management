import React, { useContext } from 'react'
import { FireBaseContext } from '../context/AppContext'
import QRCode from "react-qr-code";

export const Participants = () => {
  const {UserData} = useContext(FireBaseContext)
  return (
    <div className='bg-white min-h-screen' >
      <br/><br/>
    <div className='text-black font-bold text-3xl' >you have {UserData.games} games left and {!UserData.cm? "0": UserData.cm} Cosplay/Movie Marathon left </div>
  <br/>
    <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={UserData.mail}
    viewBox={`0 0 256 256`}
    />
    </div>
    </div >
  )
}
