import * as Const  from "../../const"

// ***************SearchUser*************
export  const   SetDataRow=(data)=>({
 type : Const.SetDataRow,
 DataRowTable : data,
});