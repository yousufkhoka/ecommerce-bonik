import { useEffect, useState } from 'react';


const useWindowWidth = (screenSize) => {
    const [ onSmallSceen , setOnSmallSceen] = useState(false)

    useEffect(()=>{
    const chechScreenSize = () =>{
         setOnSmallSceen(window.innerWidth < screenSize)
        }

     chechScreenSize()

     window.addEventListener('resize' , chechScreenSize)
 
     return () => window.removeEventListener('resize', chechScreenSize)
 
    },[screenSize])
    
   return onSmallSceen
};

export default useWindowWidth;