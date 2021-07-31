import React, {useState, useEffect} from 'react';
import { useTable } from 'react-table';


import HighHeadline from "../HighHeadline";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/all";
import Varify from "../Userinfo/Varify";


// import {UseSideAnimate} from "../../Common/componennt/Hooks/UseSideAnimate/UseSideAnimate";

const Statistic = (props) => {

    const [userStatic, setuserStatic] = useState([

        {header:"موجودی هفته",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },

        {header:"موجودی روز",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },


        {header:"موجودی کل",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },

        {header:"موجودی ماه",

            // *************************************** part 1

            TitlePart1:"پرداختی آنلاین",
            SubtitlePart1:"۱،۴۰۰،۰۰۰تومان",

            TitlePart1_class: " c-silver-sand  ",
            SubtitlePart1_class:" c-Charade  ",


            // *************************************** part 2

            TitlePart2:"تعداد رزروها",
            SubtitlePart2:"۳۴",

            TitlePart2_class: " c-silver-sand ",
            SubtitlePart2_class:"c-Charade ",


            // *************************************** part 3

            TitlePart3:"میزان بدهی",
            SubtitlePart3:"۱،۴۰۰،۰۰۰تومان",

            TitlePart3_class: " c-silver-sand ",
            SubtitlePart3_class:"c-Charade   ",


            // *************************************** part 4

            TitlePart4:"پرداختی در محل",
            SubtitlePart4:"۱،۴۰۰،۰۰۰تومان",

            TitlePart4_class: "c-silver-sand",
            SubtitlePart4_class:" c-Charade     ",

            // *************************************** part 5

            TitlePart5:"۱،۴۰۰،۰۰۰تومان",
            SubtitlePart5:"میزان درآمد حاصله",

            TitlePart5_class: "c-Charade ",
            SubtitlePart5_class:" c-silver-sand   ",


        },


    ]);


    // ************************************************ sec 3 table Start ************************************************

    const data = React.useMemo(
        () => [
            {
                col1: '۶۴ ساعت',
                col2: '۶۴ ساعت',
                col3: '۶۴ ساعت',
                col4: '۶۴ ساعت',
                col5: '۶۴ ساعت',
                col6: '۶۴ ساعت',
                col7: '۶۴ ساعت',

            },
            {
                col1: '۱،۲۳۴،۰۰۰',
                col2: '۵۶۸،۰۰۰',
                col3: '۲،۵۵۵،۳۰۰',
                col4: '۳۰۰،۰۰۰',
                col5: '۱۰،۳۲۴،۵۵۵',
                col6: '۴۵۶،۰۰۰',
                col7: '۴،۵۰۰،۰۰۰',

            },

        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'شنبه',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'یکشنبه',
                accessor: 'col2',
            },
            {
                Header: 'دوشنبه',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'سه شنبه',
                accessor: 'col4',
            },
            {
                Header: 'چهارشنبه',
                accessor: 'col5', // accessor is the "key" in the data
            }
            ,
            {
                Header: 'پنجشنبه',
                accessor: 'col6',
            },
            {
                Header: 'جمعه',
                accessor: 'col7',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = useTable({ columns, data })
    //************************************************ sec 3 table End ************************************************

    useEffect(() => {
        // Update the document title using the browser API
        // return //for componentDidMount
    }, []);

    return (
        <div className='w-100 flex-column d-flex flex-center ' id="statistic">

            <div className="  flex-center flex-column col-11 br-16  mt-32 bg-white p-s16-m32-lg48-xl48 ">




                <div className=" overflow-hidden p-0">
                    <div className="row gy-3 gx-3 p-0">
                                {
                                    userStatic.map((item,index)=>
                                        <div className="col-6 " style={{height: "200px"}}>

                                            <div className=" p-2 br-8  border1-Silver-Sand w-100 h-100">
                                                <HighHeadline text={item.header}/>

                                                <div className="row gy-3 gx-1 pr-10 pt-10">

                                                    <div className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Charade">
                                                        <span className={["Fs-14 text-right" ,item.TitlePart1_class].join(" ")} key={index}>{item.TitlePart1}</span>
                                                        <span className={[" Fs-14" ,item.SubtitlePart1_class].join(" ")} key={index} dir='rtl'>{item.SubtitlePart1}</span>
                                                    </div>

                                                    <div className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Charade">
                                                        <span className={[" Fs-14 text-right" ,item.TitlePart2_class].join(" ")} key={index}>{item.TitlePart2}</span>
                                                        <span className={[" Fs-14" ,item.SubtitlePart2_class].join(" ")} key={index} dir='rtl'>{item.SubtitlePart2}</span>
                                                    </div>
                                                    <div className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Burning-Orange">
                                                        <span className={["Fs-14 text-right " ,item.TitlePart3_class].join(" ")} key={index}>{item.TitlePart3}</span>
                                                        <span className={["Fs-14 " ,item.SubtitlePart3_class].join(" ")} key={index} dir='rtl'>{item.SubtitlePart3}</span>
                                                    </div>
                                                    <div className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Charade">
                                                        <span className={[" Fs-14 text-right" ,item.TitlePart4_class].join(" ")} key={index} >{item.TitlePart4}</span>
                                                        <span className={[" Fs-14 " ,item.SubtitlePart4_class].join(" ")} key={index} dir='rtl'>{item.SubtitlePart4}</span>
                                                    </div>
                                                    <div className=" col-12 h-100 d-flex justify-content-between">
                                                        <span className={["col-6 Fs-14  text-right " ,item.TitlePart5_class].join(" ")} key={index} dir='rtl'>{item.TitlePart5}</span>
                                                        <span  className={[" col-6 Fs-14 " ,item.SubtitlePart5_class].join(" ")} key={index} dir='rtl'>{item.SubtitlePart5}</span>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    )
                                }
                    </div>
                </div>

                <div className="w-100  mt-26 br-14 border1-Silver-Sand p-24">

                    <div className="w-100 d-flex flex-row justify-content-between">

                        <span className=" bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end " style={{width:"20px"}} />۱۳۹۹/۱۱/۱ - ۱۳۹۹/۱۲/۱<AiOutlineRight className="Fs-16 " style={{width:"20px"}} /></span>

                        <div className=" d-flex flex-row justify-content-end">
                            <span className=" c-Charade Fs-14 fw-light">(بر حسب تومان)</span>
                            <span className=" c-Charade Fs-16 fw-bold">مدیریت مالی هفتگی</span>

                        </div>


                    </div>

                    <hr className="mt-20 mb-20" style={{width: "100%"}}/>


                    <table {...getTableProps()} className="w-100 rtl  " >

                        <thead>

                        {headerGroups.map(headerGroup => (
                            <tr  {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (

                                    <th{...column.getHeaderProps()} style={{ height:"40px"}} className="c-Masala Fs-12 text-center ltr">
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
                                               className="c-Masala fw-bold text-center" style={{ height:"40px"}}>
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>


                </div>

                <div className="w-100  mt-26 br-14 border1-Silver-Sand p-24">

                    <div className="w-100 d-flex justify-content-between">

                        <span className=" bg-Cultured d-flex align-items-center c-Spanish-Gray Fs-14 "><AiOutlineLeft className="Fs-16 d-flex align-items-end " style={{width: "20px"}}/>شنبه ۱۴ بهمن<AiOutlineRight className="Fs-16 " style={{width: "20px"}}/></span>
                        <span className=" c-Charade Fs-16 fw-bold">لیست رزرو ها</span>

                    </div>

                    <hr className="mt-20 mb-20 " style={{width: "100%"}}/>


                    <div className="w-100 flex-center" style={{height:"300px"}}>
                        <h1>Nemodar</h1>
                    </div>

                </div>
            </div>










        </div>
    );
};

export default Statistic;