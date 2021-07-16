import { useState, useEffect } from "react";
import profileDefault from "./../../../../Common/img/item/profileDefault.png";

export function UseProfile() {
     const [User, setUser] = useState( {"name":"",'phone':"","onboarding":"","email":"","image":undefined});

    useEffect(() => {

        if(localStorage.getItem("jaan_profile")){
            let f=localStorage.getItem("jaan_profile").search("name");


            if (f!==-1){
                let Profile=JSON.parse(localStorage.getItem("jaan_profile"))
                setUser({...User,name:Profile.name,phone:Profile.phone,email:Profile.email,onboarding:Profile.onboarding,image:Profile.image })
            }
        }

    }, []);


    const EditUser=(value,type)=>{
let oldUser=JSON.parse(localStorage.getItem("jaan_profile"));
        let NewUser={...oldUser,[type]:value}
        setUser(NewUser)
        localStorage.setItem("jaan_profile",JSON.stringify(NewUser))

    }
 const initialUser=( )=>{
     localStorage.setItem("jaan_profile",JSON.stringify({"name":"",'phone':"","onboarding":"","email":"","image":undefined}))
    }



    return {
        User,EditUser,initialUser
    }
}

