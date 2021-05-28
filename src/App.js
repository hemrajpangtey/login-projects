import React, { useState } from "react";
import Login from "./component/login";
import Registration from "./component/registration"
import DashBoard from "./component/dashboard"

const App = () => {
 
  const [condition, setCondition] = useState(true);
  const[dashBoard,getDashBoard] = useState(false)

  const[user, getUser ] = useState("");
  const[loginUser,setLoginUser] = useState({
    userName:"",
    password:""
  });
  const[items, setItems] = useState([
    {userName:"admin",password:"admin",id:45}
  ]);
  return (
    <div className="main__container" >
       {dashBoard?<DashBoard items={items} getDashBoard={getDashBoard}   setItems={  setItems} />:""}
      <div className="container" style={{display:dashBoard?"none":"flex"}}>
      {condition?<Login getDashBoard={getDashBoard} items={items} setLoginUser={setLoginUser} loginUser={loginUser} setCondition={setCondition}  />:<Registration setCondition={setCondition} setLoginUse={setLoginUser} user={user} items={items} getUser={getUser} setItems={setItems}  />}
      </div>
    </div>
  );
};

export default App;
