import React from "react";
import DashBoardItem from "./dashBoardItem"

const  dashBoard = ({getDashBoard,items, setItems}) => {

    const dashBoardLogoutHandler = () => {
        getDashBoard(false)
    }
    return <div className="container__dashBoard">
        <div className="container__dashBoard__layout dashBoard-grid dashBoard-padding layout-disable">
                   <div className="dashBoard-border"><h2>user name</h2></div>
                   <div className="dashBoard-border"><h2>Email</h2></div>
                   <div className="dashBoard-border"><h2>Address</h2></div>
                   <div className="dashBoard-border"><h2>password</h2></div>
                   <div className="dashBoard-border"><h2>edit</h2></div>
                   <div className="dashBoard-border"><h2>delete</h2></div>
            </div>
            <div className="layout">
            {items.map(eachItem=><DashBoardItem eachItem={eachItem} setItems={setItems} items={items} key={eachItem.id} /> )}
    </div>
           
        <button onClick={dashBoardLogoutHandler} className="container__dashboard__btn form-border " type="button">logout</button>
    </div>
}

export default dashBoard;