import React from "react";

const registerSucess = ({setPage,setCondition}) => {
      
    const resetPage = () => {
       setPage(false)
       setCondition(true)
    }
  
    return <div className="container__Sucess ">
        <div className="container__Sucess__layout heading-center">
        <h1>you have register sucessfully</h1>
        <button onClick={resetPage} className="form-margin form-border" type="button">Login</button>
        </div>
    </div>
}

export default registerSucess;