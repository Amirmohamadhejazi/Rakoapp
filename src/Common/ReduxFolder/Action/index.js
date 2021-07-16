
 import * as Const  from "./../const/index"



// ***************Login*************
 export  const   Get_Number_Email=(isPhone,value)=>({
     type: Const.Get_Number_Email,
     isPhone:isPhone,
     value:value
 });