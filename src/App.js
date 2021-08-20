import React, {useContext} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {UserContext} from "./Common/componennt/Provider/UserProvider";
import Login from "./Component/Login/Login";
import Userinfo from "./Component/Userinfo/Userinfo";
import Statistic from "./Component/Statistic/Statistic";
import SearchUser from "./Component/SearchUser/SearchUser";


const AuthRoute = ({ component: Component, authUser,props, ...rest }) => {
  console.log("authUser")
  console.log(authUser)
  return(
      <Route
          {...rest}

          render={props =>
              authUser ? (
                  <Component {...props} />
              ) : (
                  <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: props.location }
                      }}
                  />
              )
          }
      />

  )
};

export default function  App() {
    const User=useContext(UserContext);
  return (
      <div className="App" >
              <Switch>

                  <Route path="/login" exact render={props => <Login {...props} />}/>
                  <Route path="/statistic" exact render={props => <Statistic {...props} />}/>
                  <Route path="/searchUser" exact render={props => <SearchUser {...props} />}/>

                  <AuthRoute path="/" authUser={User.isLogIn} component={(props) => <Login {...props}  />}  />
              </Switch>

      </div>

  );
}