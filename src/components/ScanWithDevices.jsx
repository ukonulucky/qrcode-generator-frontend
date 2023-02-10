import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

function ScanWithDevices() {
    const [qrCodeScan, setQrCodeScan] = useState("")
    const handleQRCodeError = (error) => {
        console.log(error.mesage)
      }
    const handleQRCodeScan = (result) => {
      if(result){
       setQrCodeScan(result)
       
      }
    }
  return (
    <div>
          <h3>QR SCan with device web camp</h3>
     <QrReader 
     delay={300}
     style={{width:"100%"}}
     onError ={handleQRCodeError}
     onScan = {handleQRCodeScan}
     />
     {
        qrCodeScan && <p>{qrCodeScan}</p>
     }
    </div>
  )
}

export default ScanWithDevices