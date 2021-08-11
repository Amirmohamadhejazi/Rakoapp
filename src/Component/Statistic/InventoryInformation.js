import React, {useState, useEffect, useContext} from 'react';
import {useTable} from 'react-table';
import BorderTemplate from "../BorderTemplate";
import HighHeadline from "../HighHeadline";

import DataContext from "./context/DataContext";


const InventoryInformation = (props) => {

    const dataContext = useContext(DataContext)

    const data = dataContext.userStatic;

    return (

        <div className="row gy-3 gx-3 p-0">
            {
                data.map((item, index) =>
                    <div className="col-6 " style={{height: "200px"}}>
                        <BorderTemplate class={"p-2 br-8 h-100 "}>

                            <HighHeadline text={item.header}/>

                            <div className="row gy-3 gx-1 pr-10 pt-10">

                                <div
                                    className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Charade">
                                    <span className={["Fs-14 text-right", item.TitlePart1_class].join(" ")}
                                          key={index}>{item.TitlePart1}</span>
                                    <span className={[" Fs-14", item.SubtitlePart1_class].join(" ")} key={index}
                                          dir='rtl'>{item.SubtitlePart1}</span>
                                </div>

                                <div
                                    className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Charade">
                                    <span className={[" Fs-14 text-right", item.TitlePart2_class].join(" ")}
                                          key={index}>{item.TitlePart2}</span>
                                    <span className={[" Fs-14", item.SubtitlePart2_class].join(" ")} key={index}
                                          dir='rtl'>{item.SubtitlePart2}</span>
                                </div>
                                <div
                                    className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Burning-Orange">
                                    <span className={["Fs-14 text-right ", item.TitlePart3_class].join(" ")}
                                          key={index}>{item.TitlePart3}</span>
                                    <span className={["Fs-14 ", item.SubtitlePart3_class].join(" ")} key={index}
                                          dir='rtl'>{item.SubtitlePart3}</span>
                                </div>
                                <div
                                    className=" col-6 d-flex flex-column   justify-content-around pr-10 border-r3-Charade">
                                    <span className={[" Fs-14 text-right", item.TitlePart4_class].join(" ")}
                                          key={index}>{item.TitlePart4}</span>
                                    <span className={[" Fs-14 ", item.SubtitlePart4_class].join(" ")} key={index}
                                          dir='rtl'>{item.SubtitlePart4}</span>
                                </div>
                                <div className=" col-12 h-100 d-flex justify-content-between">
                                    <span className={["col-6 Fs-14  text-right ", item.TitlePart5_class].join(" ")}
                                          key={index} dir='rtl'>{item.TitlePart5}</span>
                                    <span className={[" col-6 Fs-14 ", item.SubtitlePart5_class].join(" ")} key={index}
                                          dir='rtl'>{item.SubtitlePart5}</span>
                                </div>

                            </div>

                        </BorderTemplate>
                    </div>
                )
            }
        </div>
    )

}

export default InventoryInformation;