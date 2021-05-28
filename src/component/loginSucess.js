import React from "react";

const loginSucess = ({setPage,setCondition}) => {

    const resetPage = () => {
        setPage(false)
        setCondition(true)
     }
  
     
    return <div className="container__Sucess">
        <div className="container__Sucess__layout heading-center">
        <h1>You login sucessfully</h1>
        <button  onClick={resetPage}  className="form-margin form-border" type="button">Logout</button>
        </div>   
    </div>
}

export default loginSucess;