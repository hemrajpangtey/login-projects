import React, { useState } from "react";
import RegisterSucess from "./registerSucess";

const Registration = ({ user, items, setItems, getUser, setCondition,setLoginUser }) => {
  const [page, setPage] = useState(false);

  const userHandler = (e) => {
    const { name, value } = e.target;
    getUser((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const itemHandler = (e) => {
    e.preventDefault();

    if (
      !user.userName ||
      !user.email ||
      !user.address ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("incomplete form can't submit");
      return;
    } else {
     const checkUser = items.find(x=>x.userName === user.userName|| x.email === user.email);
      if(user.password !== user.confirmPassword){
        alert("password not match")
      }
      else if(checkUser){
        alert("user already exist")
        return
      }
      else{
        setItems([
          ...items,
          {
            userName: user.userName,
            email: user.email,
            address: user.address,
            password: user.password,
            confirmPassword: user.confirmPassword,
            id: Math.random() * 1000,
          },
        ]);
        getUser("");
        callRegisterSucess();
      }
     
    }
  };

  const callRegisterSucess = () => {
    setPage(true);
  };

  return (
    <div className="container__register ">
      {page ? (
        <RegisterSucess setCondition={setCondition} setPage={setPage} />
      ) : (
        ""
      )}
      <div
        className="container__register__formLayout"
        style={{ display: page ? "none" : "block" }}
      >
        <form action="" className="container__register__formLayout__form">
          <div className="container__register__formLayout__form__heading heading-center form-margin">
            <h1>registration form</h1>
          </div>
          <label className="form-margin">name</label>
          <input
            name="userName"
            maxLength="80" 
            onChange={userHandler}
            type="text"
            className="form-margin register-input"
          />
          <label className="form-margin">email id</label>
          <input
            name="email"
            maxLength="80" 
            onChange={userHandler}
            type="text"
            className="form-margin register-input"
          />
          <label className="form-margin">address</label>
          <textarea
            name="address"
            maxLength="100" 
            onChange={userHandler}
            id=""
            cols="30"
            rows="4"
          ></textarea>
          <label className="form-margin">password</label>
          <input
            name="password"
            minLength="6"
            maxLength="80" 
            onChange={userHandler}
            type="text"
            className="form-margin register-input"
          />
          <label className="form-margin">Confirm password</label>
          <input
            name="confirmPassword"
            minLength="6"
            maxLength="80" 
            onChange={userHandler}
            type="text"
            className="form-margin register-input"
          />
          <button
            type="submit"
            onClick={itemHandler}
            className="form-margin form-border register-form-btn"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
