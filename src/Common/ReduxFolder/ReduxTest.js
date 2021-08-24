import React  from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {Decrease_Number, Increase_Number} from "./Action";
const ReduxTest = (props) => {
    const dispatch=useDispatch();
    const count = useSelector(state=>state.CounterReducer.counter);
    console.log(count)
    return (
        <div>
            <h1 className='text-center  '>redux</h1>
            <h3>counter:{count} </h3>
            <div className='d-flex justify-content-center'>
                <div className='d-flex justify-content-between w-50'>
                    <button className='btn btn-outline-primary' onClick={()=>{ dispatch(Increase_Number(count+1))}}>+</button>
                    <h3>counter:{count} </h3>
                    <button className='btn btn-outline-primary'  onClick={()=>{ dispatch(Decrease_Number(count-1))}}>-</button>
                </div>
            </div>

        </div>
    );
};

export default ReduxTest;