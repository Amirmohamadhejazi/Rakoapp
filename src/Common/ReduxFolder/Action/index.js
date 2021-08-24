
 import * as Const  from "./../const/index"



// ***************Login*************
 export  const   Increase_Number=(counter)=>({
     type: Const.Increase_Number,
     counter:counter,
 });
export  const   Decrease_Number=(counter)=>({
     type: Const.Decrease_Number,
    counter:counter,
 });