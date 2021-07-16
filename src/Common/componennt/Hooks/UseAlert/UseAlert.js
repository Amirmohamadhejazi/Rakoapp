 import React, {useState, useEffect} from 'react';
 import {  toast } from 'react-toastify'
 export function UseAlert (text){
     const toastId = React.useRef(null);
     // const [isMobile, SetIsMobile] = useState(true);

     function callAlert(){
         if(! toast.isActive(toastId.current)   ) {
             toastId.current =  toast.error(text, {
                 position: "top-right",
                 autoClose: 5000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: false,
                 draggable: true,
                 progress: undefined,
             });
         }
     }

     useEffect(() => {

         // windowsDimention();
         // window.addEventListener("resize",windowsDimention)
         // return ()=>window.removeEventListener("resize",windowsDimention)
     }, []);
     return {callAlert}
 }

