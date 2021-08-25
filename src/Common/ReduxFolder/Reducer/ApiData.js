import {baseURL} from "../../api/SearchApi";
import Usertablebtn from "../../../Component/Userinfo/Usertablebtn";
import React from "react";

let initial={
    DataSearchUser : false,
    columnsSearchUser:      [
    {
        Header: 'تصویر',
        accessor: 'image', // accessor is the "key" in the data,
        Cell: function Cell(cell) {
            return (
                <div className="flex-center boxShadow04 br-50 overflow-hidden mx-auto my-auto SearchUserImgSize" >
                    <img src={cell.value!==null?`${baseURL}${cell.value}`:'/Assets/Img/man-avatar.svg'} className="object-fit-cover w-100 h-100"  alt="user-pic"/>
                </div>
            )}
    },
    {
        Header: 'نام و نام خانوادگی',
        accessor: 'name',
    },
    {
        Header: 'ساعت رزرو در هفته',
        accessor: 'sum_seance_in_week', // accessor is the "key" in the data
    },
    {
        Header: 'ساعت رزرو در ماه',
        accessor: 'sum_seance_in_month', // accessor is the "key" in the data
    },
    {
        Header: 'مبلغ کل بدهی',
        accessor: 'sum_seance',
    },
    {
        Header: 'اکشن',
        Cell: function Cell(cell) {
            return (
                <Usertablebtn classParent={"border1-Charade br-4 flex-center " } id={cell.row} classChild={"Fs-10 c-Charade"} text={"تسویه بدهی"}/>
            )}


    },




],
}

export const ApiData = (state= initial, action) => {
    switch (action.type) {
        case 'SetApiData':
            return {
                ...state,
                DataSearchUser:action.DataSearchUser
            }
            console.log(state , action)
            break;
        default:
            return state;
            break;
    }
}