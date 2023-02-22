import React,{useState} from 'react'
import { QrReader } from 'react-qr-reader';
export const Admins = () => {
  const [data, setData] = useState('No result');
  return (
    <div>

<QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />


    </div>
  )
}
