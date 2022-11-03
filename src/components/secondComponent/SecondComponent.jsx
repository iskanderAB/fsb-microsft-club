import React, { useState } from 'react'

function SecondComponent() {
    const [like, setLike]= useState(false)

    const editLike = () => {
        setLike(!like)
    }


  return (
    <div>
        <button 
            style={{
                backgroundColor: like ? 'blue' : 'red'
            }}
            onClick={editLike}
        >
            like
        </button>
    </div>
  )
}

export default SecondComponent