import * as Const  from "../../const/index"

// ***************SearchUser*************
export  const   SetDataRow=(data)=>({
 type : Const.SetDataRow,
 DataRowTable : data,
});

export  const   GetUserEachInfo=(data)=>({
 type : Const.GetUserInfo,
 eachData  : data,
});