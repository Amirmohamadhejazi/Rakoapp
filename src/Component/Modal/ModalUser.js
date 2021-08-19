import React, {useContext, useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal'

import DataContext from "./../Userinfo/context/UsertablebtnContext";

const ModalUser = (props) => {
    const dataContext = useContext(DataContext)


    // const [show, setshow] = useState(dataContext.showModal);
    return (
                <Modal className="p-0" show={dataContext.showModal}  >

                    {props.children}

                </Modal>
    );
};

export default ModalUser;