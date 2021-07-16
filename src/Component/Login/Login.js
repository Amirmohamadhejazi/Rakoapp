import React, {useState, useEffect} from 'react';
import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";
import SlideAnimation from "../../Common/componennt/SLideAnimation/SlideAnimation";
import {Card} from 'react-bootstrap'

const Login = (props) => {
    let { mode,state,ChangePage}= UseSideAnimate()

    // const [count, setCount] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='w-100 flex-center min-vh-100 h-100'>

            <div className='w-50 '>
                <div className='flex-center'>
                    <img src='/Assets/Img/Login/logoHeader.svg' alt="logoHeader.svg"/>
                </div>



                <div className='d-flex justify-content-center'>
                    <span className={['Fs-16 font-weight-bold btn   pb-8 ',state===1?'  btn-primary':' btn-outline-primary'].join('')} onClick={()=>{ChangePage( 1,'fadeEnter')}} > صفحه اول </span>
                    <span  className={['Fs-16 font-weight-bold  btn pb-8 mr-24 ',state!==1?'   btn-primary':' btn-outline-primary '].join('')} onClick={()=>{ChangePage( 2,'fadeExit')}} >صفحه دوم </span>

                </div>

                <SlideAnimation mode={mode} state={state}>
                    <div className='w-100 mainContent'>
                        <Card>
                            <Card.Body>
                            <span>
                                قسمت اول
                            </span>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className='w-100 mainContent'>
                        <Card>
                            <Card.Body>
                            <span>
                                قسمت دوم
                            </span>
                            </Card.Body>
                        </Card>

                    </div>
                </SlideAnimation>
            </div>


        </div>
    );
};

export default Login;