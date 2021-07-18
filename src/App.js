import React, {useContext} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {UserContext} from "./Common/componennt/Provider/UserProvider";
import Login from "./Component/Login/Login";
import Userinfo from "./Component/Userinfo/Userinfo";




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
      <div className="App bg-home " >
              <Switch>

                  <Route path="/login" exact render={props => <Login {...props} />}/>
                  <Route path="/userinfo" exact render={props => <Userinfo {...props} />}/>

                   <AuthRoute path="/" authUser={User.isLogIn} component={(props) => <Login {...props}  />}  />
              </Switch>

      </div>

  );
}