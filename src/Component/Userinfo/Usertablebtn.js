import React from 'react';
// import DataContext from "./../context/DataContext";

    // const dataContext = useContext(DataContext)

        // if (sad){
        //
        // }else {
        //     <div className="w-100 d-flex justify-content-center">
        //         <div className={props.classParent} style={{width: "80px", height: "30px"}}>
        //             <span className={props.classChild}>{props.text}</span>
        //         </div>
        //
        //
        //     </div>
        // }
const Usertablebtn = (props) => {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className={props.classParent} style={{width: "80px", height: "30px" , cursor:"pointer"}}>
                <span className={props.classChild}>{props.text}</span>
            </div>
        </div>
  )
}
export default Usertablebtn;