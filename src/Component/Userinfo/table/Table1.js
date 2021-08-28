import React, {useEffect, useContext} from 'react';
import { useTable } from 'react-table';
import {useSelector} from "react-redux";


const Table1 = (props) => {

    let eachData = useSelector(state => state.UserInfo.eachData);

    const ProfileWeek = eachData.original.sum_seance_in_days_of_week
    const Sum_Week = ProfileWeek[0] + ProfileWeek[1] + ProfileWeek[2] + ProfileWeek[3] + ProfileWeek[4] + ProfileWeek[5] + ProfileWeek[6]
    const Data_table1 = React.useMemo(
        () => [
            {
                Saturday: ProfileWeek[0],
                Sunday: ProfileWeek[1],
                Monday: ProfileWeek[2],
                Tuesday: ProfileWeek[3],
                Wednesday: ProfileWeek[4],
                Thursday: ProfileWeek[5],
                Friday: ProfileWeek[6],
                SumWeek: Sum_Week
            }
        ],
        []
    )

    const columns_table1 = React.useMemo(
        () => [

            {
                Header: 'شنبه',
                accessor: 'Saturday', // accessor is the "key" in the data
            },
            {
                Header: 'یک شنبه',
                accessor: 'Sunday',
            },
            {
                Header: 'دوشنبه',
                accessor: 'Monday', // accessor is the "key" in the data
            },
            {
                Header: 'سه‌شنبه',
                accessor: 'Tuesday', // accessor is the "key" in the data
            },
            {
                Header: 'چهارشنبه',
                accessor: 'Wednesday',
            },
            {
                Header: 'پنجشنبه',
                accessor: 'Thursday', // accessor is the "key" in the data
            }
            ,
            {
                Header: 'جمعه',
                accessor: 'Friday',
            },
            {
                Header: 'کل هفته',
                accessor: 'SumWeek',
            },
        ],
        []
    )

    const data= Data_table1
    const columns= columns_table1

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = useTable({ columns, data })

        return (
            <table {...getTableProps()} className="w-100 rtl mt-26">
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (

                                    <th{...column.getHeaderProps()} className="c-Masala fw-light Fs-14 ltr" style={{ height:"50px"}}>
                                            {column.render('Header')}
                                    </th>

                                ))}
                        </tr>
                    ))}

                    </thead>

                    <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}> {row.cells.map(cell => {
                                        return (
                                            <td{...cell.getCellProps()} className="border-b1-Anti-Flash-White fw-bolder c-Masala Fs-14   " style={{ height:"50px"}}>
                                                    {cell.render('Cell')}
                                            </td>
                                        )
                                })}
                                </tr>
                            )
                    })}
                    </tbody>

            </table>
        )

}

export default Table1;