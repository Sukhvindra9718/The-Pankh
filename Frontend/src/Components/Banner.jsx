import React from 'react'

function Banner({imageURL}) {
  return (
    <div>
        <img src={imageURL} alt="banner" width={"100%"} height="600"/>
    </div>
  )
}

export default Banner