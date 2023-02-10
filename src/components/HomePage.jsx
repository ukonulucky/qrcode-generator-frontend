import React from "react";
import {useEffect, useState}  from "react"
import axios from "axios"

import { Link } from "react-router-dom";

function HomePage() {
  const [qrcode, setQrCode] = useState("")



  const handleQRCode = async () => {
    try {
        const res = await axios.get("http://localhost:5000")
        if(res){
            setQrCode(res.data)
            
        }
    } catch (error) {
      console.log(error.message)   
    }
  }


    useEffect(() =>{
        handleQRCode()
    },[])
  if(qrcode){
   return <div>
    <h2>Scan QR CODE</h2>
    <img src={qrcode} alt="qr-code" />
   <Link to="scan">
   Scan QR Code
   </Link>
  </div>;

  } else{
    <div>
        Loading.....
    </div>
  }
}

export default HomePage;
