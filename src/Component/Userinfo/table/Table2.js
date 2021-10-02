import React, {useEffect, useContext, useState} from 'react';
import {useTable} from 'react-table';

// import DataContext from "../context/UserInfoContext";
import Usertablebtn from "../Usertablebtn";
import {useSelector} from "react-redux";

const Table2 = (props) => {

    // const dataContext = useContext(DataContext)
    //
    //
    // let eachData = useSelector(state => state.UserInfo.eachData);

    // const Data_table2 = React.useMemo(
    //     () => [
    //         {
    //             col1: '۹۹/۱۱/۵',
    //             col2: '۱۴:۰۰',
    //             col3: '۱۶:۰۰',
    //             col4: 'فعال',
    //             col5:  'آنلاین' ,
    //             col6:<Usertablebtn classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={"پرداخت شد"}/>,
    //
    //         },
    //         {
    //             col1: '۹۹/۱۱/۴',
    //             col2: '۱۴:۰۰',
    //             col3: '۱۶:۰۰',
    //             col4: 'لغو شده',
    //             col5: '-',
    //             col6:<Usertablebtn classParent={"border-AthensGray br-4 flex-center " } classChild={"Fs-10 c-AthensGray"} text={"پرداخت نشد"}/>,
    //
    //         },
    //         {
    //             col1: '۹۹/۱۱/۴',
    //             col2: '۱۴:۰۰',
    //             col3: '۱۶:۰۰',
    //             col4: 'تمام شده',
    //             col5: 'آفلاین',
    //             col6:<Usertablebtn classParent={"border1-Charade br-4 flex-center " } classChild={"Fs-10 c-Charade"} text={"پرداخت شد"}/>,
    //         },
    //     ],
    //     []
    // )
    //
    // const columns_table2 = React.useMemo(
    //     () => [
    //         {
    //             Header: 'تاریخ',
    //             accessor: 'col1', // accessor is the "key" in the data
    //         },
    //         {
    //             Header: 'ساعت شروع',
    //             accessor: 'col2',
    //         },
    //         {
    //             Header: 'ساعت پایان',
    //             accessor: 'col3', // accessor is the "key" in the data
    //         },
    //         {
    //             Header: 'وضعیت رزرو',
    //             accessor: 'col4',
    //         },
    //         {
    //             Header: 'وضعیت پرداخت',
    //             accessor: 'col5', // accessor is the "key" in the data
    //         }
    //         ,
    //         {
    //             Header: 'عملیات',
    //             accessor: 'col6',
    //         },
    //     ],
    //     []
    // )
    // //
    // // let [Data_table2, setData_table2] = useState(eachData.original.reserved_plan_in_month)
    // //
    // //
    // // const columns_table2 = React.useMemo(
    // //     () => [
    // //         {
    // //             Header: 'تاریخ',
    // //             accessor: "day",
    // //         },
    // //         {
    // //             Header: 'ساعت شروع',
    // //             accessor: 'start_time',
    // //         },
    // //         {
    // //             Header: 'ساعت پایان',
    // //             accessor: 'end_time',
    // //         },
    // //         {
    // //             Header: 'وضعیت رزرو',
    // //
    // //
    // //             accessor: 'reserved_from_panel',
    // //
    // //             Cell: function Cell(cell) {
    // //                 // console.log(cell.value)
    // //                 return (
    // //                     <span>{cell.value !== true ? "رزور نشد" : "رزرو ثبت شد"}</span>
    // //                 )
    // //             }
    // //
    // //
    // //         },
    // //         {
    // //             Header: 'وضعیت پرداخت',
    // //             accessor: 'is_paid',
    // //
    // //             Cell: function Cell(cell) {
    // //                 // console.log(cell.value)
    // //                 return (
    // //                     cell.value !== true ?
    // //                         <Usertablebtn classParent={"border1-Charade br-4 flex-center  "} id={cell.row}
    // //                                       classChild={"Fs-12 c-Charade"} text={"پرداخت"}/>
    // //                         : <span>پرداخت انجام شد</span>
    // //                 )
    // //             }
    // //         }
    // //     ],
    // //     []
    // // )
    // // useEffect(() => {
    // //     console.log(eachData)
    // // }, [eachData])
    //
    // // useEffect(() => {
    // //     console.log(columns_table2)
    // // }, [columns_table2])
    //
    // //
    // const data=Data_table2
    // const columns=columns_table2
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    //
    // } = useTable({columns, data})

    return (

<div className="w-100 H-200 flex-center">
    <h3>به دلیل ارور جدول مشکل دارد و چند ساعت دیگر رفرش کنید</h3>
</div>
//         <table {...getTableProps()} className="w-100 rtl">
//
//             <thead>
//
//             {headerGroups.map(headerGroup => (
//                 <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map(column => (
//
//                         <th{...column.getHeaderProps()} className="c-Mountain-Mist Fs-12 text-center ltr">
//                             {column.render('Header')}
//                         </th>
//
//                     ))}
//                 </tr>
//             ))}
//
//             </thead>
//
//             <tbody {...getTableBodyProps()}>
//             {rows.map(row => {
//                 prepareRow(row)
//                 return (
//                     <tr {...row.getRowProps()}> {row.cells.map(cell => {
//                         return (
//                             <td{...cell.getCellProps()} className="border-b1-Anti-Flash-White text-center pt-20 pb-20"
//                                style={{height: "50px"}}>
//                                 {cell.render('Cell')}
//                             </td>
//                         )
//                     })}
//                     </tr>
//                 )
//             })}
//             </tbody>
//
//         </table>
    )

}

export default Table2;