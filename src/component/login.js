import React,{useState} from "react";
import LoginSucess  from "./loginSucess"


const Login = ({items,setCondition,loginUser,setLoginUser,getDashBoard}) => {

    const[page,setPage] = useState(false);

    const loginUserHandler = (e) => {
        const{name,value} = e.target;
        setLoginUser(preValue=>{
            return {...preValue,[name]:value}
        })
    }

    const conditonHandler = (e) => {
        e.preventDefault();
        setCondition(false);
        setLoginUser({
            userName:"",
            password:""
        })
      }

      const loginHandler = (e) => {
          e.preventDefault();
          if(!loginUser.userName){alert("emplty field")}
          else if(loginUser.userName === "admin" && loginUser.password === "admin"){getDashBoard(true)}
          else{
            const userValue = items.find(eachItem=> loginUser.userName === eachItem.userName&&loginUser.password===eachItem.password )
            
            if(!userValue){ alert("invalid user")}
            else{
                setLoginUser({
                    userName:"",
                    password:""
                })
                callLoginSucess();
                }
          }
      }

      const callLoginSucess = () => {
        setPage(true);
    }

    return <div className="container__login">
          {page?<LoginSucess setCondition={setCondition} setPage={setPage}/>:""}
        <div className="container__login__formLayout" style={{display:page?"none":"flex"}}>
        <form action="" className="container__login__formLayout__form">
            <div className="container__login__formLayout__form__heading heading-center form-margin">
                <p className="information">FOR DASHBOARD LOGIN AS A ADMINISTRATOR  (user name= admin, password=admin)</p>
            <h1>Login</h1>
            </div>
           <label className=" form-margin">user name</label>
           <input name="userName" value={loginUser.userName} required onChange={loginUserHandler } type="text" className=" form-margin login-input form-border" placeholder="user name" />
           <label className=" form-margin">password</label>
           <input name="password" value={loginUser.password} required onChange={loginUserHandler } type="text" className=" form-margin login-input form-border" placeholder="password" />
           <button type="submit" onClick={loginHandler} className="login-btn form-margin form-border">Login</button>
           <div className="container__login__formLayout__form__registration">
           <label>new registration click here</label>
           <button onClick={conditonHandler} type="submit" className="login-register-btn form-border">register</button>
           </div>
           
       </form>
        </div>
       
    </div>
}

export default Login