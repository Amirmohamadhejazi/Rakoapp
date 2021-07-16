import React, {Component} from 'react';
export const UserContext=React.createContext() ;




class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'ehsan',
            isLogIn:!!localStorage.getItem("LoginJan"),
            Auth:"",
            HandelLogin : () => {
                console.log("set initial")
                localStorage.setItem('LoginJan', true);
                this.setState({
                    name:'',
                    isLogIn:true,
                    Auth:localStorage.getItem("janToken")
                },()=>{console.log(this.state)})

            }
        }
    }



    render() {
        return (

            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>


        );
    }
}

export default UserProvider;