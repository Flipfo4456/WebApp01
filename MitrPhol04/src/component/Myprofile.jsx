import React from 'react'

function Myprofil({userPacket}) {
  return (
    <div>
        <p>Welcome, {userPacket.firstName} </p>
    </div>
  )
}

export default Myprofil