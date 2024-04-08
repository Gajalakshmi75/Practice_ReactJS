import React from 'react'

const Fliter = () => {
    const name=["lakshmi","gaja","chinni","maha","raju","sai"];
    const filtered=name.filter(names=>names.includes("J"))
  return (
    <div>
        {
            filtered.map(item=><li>{item}</li>)
        }
    </div>
  )
}

export default Fliter