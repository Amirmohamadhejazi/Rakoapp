import React, {useState, useEffect, useContext} from 'react';
import {useTable} from 'react-table';

import DataContext from "./../context/DataContext";

const Table = (props) => {

    const dataContext = useContext(DataContext)

    const data = dataContext.Data_table;
    const columns= dataContext.columns_table;


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = useTable({ columns, data })

    return (

            <table {...getTableProps()} className="w-100 rtl" >

                <thead>
                {headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (

                            <th{...column.getHeaderProps()}className="c-Masala Fs-14 text-center H-40 ltr">
                                {column.render('Header')}
                            </th>

                        ))}
                    </tr>
                ))}
                </thead>

                <tbody {...getTableBodyProps()}>{rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td{...cell.getCellProps()}
                                       className="c-Masala Fs-14 fw-bold text-center H-40">
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

export default Table;

