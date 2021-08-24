import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Setloading} from "./Action/SearchUser";
import Data_Context from "../../Component/SearchUser/context/SearchUserContext";
import TopBar from "../../Component/TopBar";
import BorderTemplate from "../../Component/BorderTemplate";
import HighHeadline from "../../Component/HighHeadline";
import {BiSearch} from "react-icons/all";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Loading from "../../Component/Loading";
import CommonTable from "../../Component/SearchUser/table/common table";
import {SearchUser} from "./Reducer/SearchUser";

const ReduxTest = (props) => {
    // const count1 = useSelector(state=>state.CounterReducer);
    const loading = useSelector(state => state.SearchUser);

    // console.log(count1 )
    console.log(loading)

    const dispatch = useDispatch();
    // اکشن رو توی کامپوننت فراخونی میکنی توی ریدیوسر باید تابعش رو بنویسی
    let value = {
        // Data_table:state.ApiData,
        // columns_table:state.columns_table,
    }
    return (
        <Data_Context.Provider value={value}>
            <div className='w-100 flex-center flex-column'>
                <TopBar/>
                <div className="flex-center flex-column col-11 br-16 mt-32 bg-white p-s16-m32-lg48-xl48 "
                     id="SearchUser">
                    {/************************************************ Sec 1 ************************************************/}
                    <BorderTemplate class={"br-14 p-24"}>
                        {/*<button className='btn btn-outline-primary' onClick={()=>{ dispatch(Setloading)}}>+</>*/}
                        <button onClick={() => dispatch({type: "Setloading"})}>
                            click
                        </button>

                    </BorderTemplate>

                    <BorderTemplate class={"mt-26 br-14 p-24"}>

                        <HighHeadline text={"مربیان با بیشترین بدهی"}/>
                        {
                            loading
                                ? <Loading/>
                                : <span>ok shod</span>
                        }
                    </BorderTemplate>
                </div>
            </div>
        </Data_Context.Provider>
    );
};

export default ReduxTest;