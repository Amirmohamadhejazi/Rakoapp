import { useState, useEffect } from "react";


export function UseModals() {
    const [Modal, setModal] = useState({isOpen:false,type:""});

    const toggleModal=(type)=>{
        setModal({isOpen:!Modal.isOpen,type:type})
    }

    return {
        Modal,toggleModal
    }
}

