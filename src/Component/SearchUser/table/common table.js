import React, {useState, useEffect, useContext} from 'react';
import {useTable} from 'react-table';

import DataContext from "../context/SearchUserContext";


const CommonTable = (props) => {

    const dataContext = useContext(DataContext)

    const data = dataContext.Data_table;
    const columns= dataContext.columns_table;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    console.log(columns)
    console.log(data)

    return (

        <>
            <table {...getTableProps()} className="w-100 mt-26 rtl" id="CommonTable">

                <thead>

                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (

                            <th{...column.getHeaderProps()} className="c-Mountain-Mist Fs-12 text-center ltr">
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
                                <td{...cell.getCellProps()} className="border-b1-Anti-Flash-White text-center pt-20 pb-20" style={{height: "50px"}}>{cell.render('Cell')}
                                </td>
                            )
                        })}
                        </tr>
                    )
                })}
                </tbody>


            </table>
        </>

    )

}

export default CommonTable;