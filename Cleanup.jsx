import React, { useEffect, useState } from "react";

function Clean (){
    const [width,setwidth]=useState(window.screen.height)

    const actualheight = () =>{
        console.log(window.innerHeight);
        setwidth(window.innerHeight)
    }

    useEffect(()=>{
      console.log('add event ');
        window.addEventListener('resize',actualheight )
      
        // This is a clean up
      
        return()=>{                                                    
            console.log('remove event');
            window.removeEventListener('resize', actualheight)
        }  
    })
 
    


    return(

        <div>
            <p>The actual size of window</p>
  <h1>{width}</h1>

        </div>
    )
}
export default Clean