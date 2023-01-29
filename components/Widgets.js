import React from 'react'

function Widgets() {
  return (
    <div className="flex item-center justify-between mt-14 ml-10">

        <iframe
        src="https://www.erkul.games/live/calculator"
        width="700"
        height="440"
        style={{border:"none",overflow:"hidden"}}
        
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
        ></iframe>  
    </div>
  )
}

export default Widgets