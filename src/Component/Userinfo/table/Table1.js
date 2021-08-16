import React, {useEffect, useContext} from 'react';
import { useTable } from 'react-table';

import DataContext from "../context/UserInfoContext";

const Table1 = (props) => {

    const dataContext = useContext(DataContext)

    const data= dataContext.Data_table1
    const columns= dataContext.columns_table1

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