import React, {useState, useEffect} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";

const SlideAnimation = (props) => {
    const [state, setstate] = useState(1);
    const [mode, setmode] = useState("fadeEnter");
    useEffect(() => {
        setstate(props.state)
    },[ props.state]);
    useEffect(() => {
        setmode(props.mode)
    },[ props.mode]);
let{DivClass}=props
    return (
        <div className={["main",DivClass].join(" ")}>
            <SwitchTransition mode={"out-in"}>
                <CSSTransition
                    key={state}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames={mode}
                >
                    <div className='w-100  mainContent'>
                        {
                            state===1?
                                props.children[0]:
                                props.children[1]
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>


        </div>
    );
};

export default SlideAnimation;