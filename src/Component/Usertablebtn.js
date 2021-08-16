import React, {useState, useEffect, useContext} from 'react';
import DataContext from "./SearchUser/context/SearchUserContext";
import api from "../Common/api/SearchApi";
import Modal from 'react-bootstrap/Modal'

const Usertablebtn = (props) => {
    const dataContext = useContext(DataContext)

    const [show, setShow] = useState(dataContext.show);

    return (


        <>
            <div className="w-100 d-flex justify-content-center">
                <div onClick={() => setShow(true)} className={props.classParent}
                     style={{width: "80px", height: "30px", cursor: "pointer"}}>
                    <span className={props.classChild}>{props.text}</span>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
            >
                <div className="bg-white">
                    asdf
                </div>
            </Modal>

        </>
    )
}

// const Usertablebtn = (props) => {
//     return (
//         <div className="w-100 d-flex justify-content-center">
//             <div className={props.classParent} style={{width: "80px", height: "30px" , cursor:"pointer"}}>
//                 <span className={props.classChild}>{props.text}</span>
//             </div>
//         </div>
//     )
// }
export default Usertablebtn;