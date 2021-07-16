import React, {useState, useEffect,useContext} from 'react';
export function UseMobile (){
    const [isMobile, SetIsMobile] = useState(true);

    function windowsDimention(){
        const Width = window.outerWidth;

        if (Width <= 450) {
            SetIsMobile(true)

        } else {
            SetIsMobile(false)
        }
    }

    useEffect(() => {
        windowsDimention();
        window.addEventListener("resize",windowsDimention)
        return ()=>window.removeEventListener("resize",windowsDimention)
    }, []);
    return {isMobile}
}
