import React from 'react'
import logo192 from "./logo512.png";
const DownloadFile = () => {
  return (
    <div>
        <center>
            <img src={logo192} />
            <a href={logo192} className='btn btn-primary' download="logo192">Download</a>
        </center>
    </div>
  )
}

export default DownloadFile