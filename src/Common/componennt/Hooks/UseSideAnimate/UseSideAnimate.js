import React, { useState } from "react";




export function UseSideAnimate() {
    const [mode, setMode] = useState("fadeEnter");
    const [state, setState] = useState(1);

    const ChangePage=( stat,mod )=>{
        console.log('click')
        setMode(mod)
        setState( stat)
    }

    return {
        mode,state,ChangePage
    }
}

