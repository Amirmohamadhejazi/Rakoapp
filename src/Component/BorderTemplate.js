import React from 'react'

const BorderTemplate = (props) => {
    return (
        <div className={["w-100 border1-Silver-Sand " ,props.class].join(" ")} id={props.id}>
                {props.children}
        </div>
    )

}

export default BorderTemplate;
