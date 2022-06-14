import React from 'react'

export default function Items(props) {
  return (
    <div className='container'>
      {
        props.Pictures.map(picture=>{
          return <div><img onClick={()=>props.handleClick(picture)} src={`./Images/${picture}`} alt="myimage" /></div>
        })
      }
          
    </div>
  )
}
