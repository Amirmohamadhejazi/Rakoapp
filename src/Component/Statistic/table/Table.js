import React, {useState, useEffect} from 'react';
import { useTable } from 'react-table';

const Table = (props) => {

    const [data, setdata] = useState(props.data);
    const [columns, setcolumns] = useState(props.columns);


    useEffect(() => {
        setdata(props.data)
    }, [props.data]);

    useEffect(() => {
        setcolumns(props.columns)
    }, [props.columns]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = useTable({ columns, data })



        return (

            <table {...getTableProps()} className="w-100 rtl  " >

                <thead>
                {headerGroups.map(headerGroup => (
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (

                            <th{...column.getHeaderProps()} style={{ height:"40px"}} className="c-Masala Fs-14 text-center ltr">
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
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td{...cell.getCellProps()}
                                       className="c-Masala Fs-14 fw-bold text-center" style={{ height:"40px"}}>
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